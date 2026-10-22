import { motionAllowed, onMotionChange } from './motion';

type FaunaParticle = {
  x: number;
  y: number;
  scatterX: number;
  scatterY: number;
  rise: number;
  curl: number;
  flow: number;
  color: string;
};

const field = document.querySelector<HTMLElement>('[data-fauna-field]');
const source = field?.querySelector<HTMLImageElement>('[data-fauna-source]');
const canvas = field?.querySelector<HTMLCanvasElement>('[data-fauna-canvas]');
const context = canvas?.getContext('2d');

if (field && source && canvas && context && !field.dataset.initialized) {
  const region = field;
  const image = source;
  const surface = canvas;
  const paint = context;
  const events = new AbortController();
  let particles: FaunaParticle[] = [];
  let frame = 0;
  let visible = false;
  let allowed = motionAllowed();
  let loaded = image.complete && image.naturalWidth > 0;
  let dirty = true;
  let failed = false;
  let pageActive = true;
  let elapsed = 0;
  let previousTime = 0;
  let width = 0;
  let height = 0;
  let artX = 0;
  let artY = 0;
  let artWidth = 0;
  let artHeight = 0;
  let radius = 0;

  // Read the supplied SVG's actual pixels. No procedural substitute for the mark.
  function prepare() {
    const bounds = region.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    if (!width || !height) return false;
    const sourceBounds = image.getBoundingClientRect();
    const scale = Math.min(sourceBounds.width / image.naturalWidth, sourceBounds.height / image.naturalHeight);
    artWidth = image.naturalWidth * scale;
    artHeight = image.naturalHeight * scale;
    artX = sourceBounds.left - bounds.left + (sourceBounds.width - artWidth) / 2;
    artY = sourceBounds.top - bounds.top + (sourceBounds.height - artHeight) / 2;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    surface.width = Math.round(width * dpr);
    surface.height = Math.round(height * dpr);
    paint.setTransform(dpr, 0, 0, dpr, 0, 0);
    radius = width < 500 ? 1.65 : 1.9;

    const sample = document.createElement('canvas');
    sample.width = 130;
    sample.height = Math.round(130 * image.naturalHeight / image.naturalWidth);
    const sampler = sample.getContext('2d', { willReadFrequently: true });
    if (!sampler) return false;
    try {
      sampler.drawImage(image, 0, 0, sample.width, sample.height);
      const pixels = sampler.getImageData(0, 0, sample.width, sample.height).data;
      const warm = new Uint8Array(sample.width * sample.height);
      const lift = new Float32Array(warm.length);
      const queue = new Uint32Array(warm.length);
      for (let index = 0; index < warm.length; index += 1) {
        const offset = index * 4;
        const red = pixels[offset];
        const green = pixels[offset + 1];
        const blue = pixels[offset + 2];
        if (pixels[offset + 3] > 100 && red > 170 && green > 55
          && red > green * 1.15 && green > blue * 1.4 && blue < 100) {
          warm[index] = 1;
        }
      }

      // Only warm-color islands connected to the upper flame may move.
      // The beak shares those inks, but is a separate lower island; the
      // cream face and green/blue body never enter this sampled-pixel mask.
      const seedLimit = Math.floor(sample.height * .48) * sample.width;
      for (let seed = 0; seed < seedLimit; seed += 1) {
        if (warm[seed] !== 1) continue;
        let next = 0;
        let count = 1;
        let top = sample.height;
        let bottom = 0;
        queue[0] = seed;
        warm[seed] = 2;
        while (next < count) {
          const index = queue[next++];
          const x = index % sample.width;
          const y = Math.floor(index / sample.width);
          top = Math.min(top, y);
          bottom = Math.max(bottom, y);
          for (let row = Math.max(0, y - 1); row <= Math.min(sample.height - 1, y + 1); row += 1) {
            for (let column = Math.max(0, x - 1); column <= Math.min(sample.width - 1, x + 1); column += 1) {
              const neighbor = row * sample.width + column;
              if (warm[neighbor] !== 1) continue;
              warm[neighbor] = 2;
              queue[count++] = neighbor;
            }
          }
        }
        const span = Math.max(1, bottom - top);
        for (let index = 0; index < count; index += 1) {
          const pixel = queue[index];
          lift[pixel] = (bottom - Math.floor(pixel / sample.width)) / span;
        }
      }
      let opaque = 0;
      for (let offset = 3; offset < pixels.length; offset += 4) {
        if (pixels[offset] > 100) opaque += 1;
      }
      const maximum = window.matchMedia('(max-width: 760px)').matches ? 600 : 1400;
      const stride = Math.max(1, Math.ceil(opaque / maximum));
      let encountered = 0;
      const sampled: FaunaParticle[] = [];
      for (let y = 0; y < sample.height; y += 1) {
        for (let x = 0; x < sample.width; x += 1) {
          const offset = (y * sample.width + x) * 4;
          if (pixels[offset + 3] <= 100) continue;
          encountered += 1;
          if (encountered % stride !== 0) continue;
          const phase = encountered * 2.399963;
          const pixel = y * sample.width + x;
          const flame = warm[pixel] === 2;
          const tip = lift[pixel];
          const restingX = artX + x / sample.width * artWidth;
          const restingY = artY + y / sample.height * artHeight;
          sampled.push({
            x: x / sample.width,
            y: y / sample.height,
            scatterX: Math.sin(phase) * width * .65,
            scatterY: Math.cos(phase * 1.17) * height * .52,
            // Reserve the actual canvas headroom, including the square's
            // radius, so even the highest sampled tip stays inside the field.
            rise: flame ? Math.min(
              artHeight * (.006 + .034 * tip),
              Math.max(0, restingY - radius - 2),
            ) : 0,
            curl: flame ? Math.min(
              artWidth * (.003 + .022 * tip),
              Math.max(0, restingX - radius - 2),
              Math.max(0, width - restingX - radius - 2),
            ) : 0,
            flow: y / sample.height * 14 + x / sample.width * 5,
            color: `rgb(${pixels[offset]} ${pixels[offset + 1]} ${pixels[offset + 2]})`,
          });
        }
      }
      particles = sampled;
      dirty = false;
      return particles.length > 0;
    } catch {
      // An unsupported or non-readable canvas leaves the real supplied SVG visible.
      failed = true;
      return false;
    }
  }

  function stop() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    previousTime = 0;
    region.dataset.particles = 'static';
  }

  function draw(time: number) {
    frame = 0;
    if (!allowed || !visible || !pageActive || failed) return;
    elapsed += previousTime ? Math.min(time - previousTime, 40) : 0;
    previousTime = time;
    paint.clearRect(0, 0, width, height);
    const progress = Math.min(1, elapsed / 1600);
    const gather = 1 - Math.pow(1 - progress, 4);
    const flowTime = elapsed * .0042;
    const flickerTime = elapsed * .0073;
    for (let index = 0; index < particles.length; index += 1) {
      const particle = particles[index];
      let x = artX + particle.x * artWidth + particle.scatterX * (1 - gather);
      let y = artY + particle.y * artHeight + particle.scatterY * (1 - gather);
      if (particle.rise > 0) {
        // Traveling waves run up the source silhouette, rather than giving
        // each speck a random orbit. Flame roots stay nearly fixed while the
        // two original tips lift and curl independently above them.
        const flow = Math.sin(flowTime + particle.flow);
        const flicker = Math.sin(flickerTime + particle.flow * 1.7);
        x += particle.curl * (flow * .72 + flicker * .28) * gather;
        y -= particle.rise * (.55 + flow * .30 + flicker * .15) * gather;
        paint.globalAlpha = .94 + .06 * flicker;
      } else {
        paint.globalAlpha = 1;
      }
      paint.fillStyle = particle.color;
      paint.fillRect(x - radius, y - radius, radius * 2, radius * 2);
    }
    paint.globalAlpha = 1;
    if (region.dataset.particles !== 'running') region.dataset.particles = 'running';
    frame = requestAnimationFrame(draw);
  }

  function synchronize() {
    if (!allowed || !visible || !loaded || !pageActive || failed) {
      stop();
      return;
    }
    if (dirty && !prepare()) {
      stop();
      return;
    }
    if (!frame) frame = requestAnimationFrame(draw);
  }

  const visibility = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    visible = entries[0].isIntersecting;
    synchronize();
  }, { threshold: .01 }) : undefined;
  if (visibility) visibility.observe(region);
  else visible = true;

  const resize = 'ResizeObserver' in window ? new ResizeObserver(() => {
    dirty = true;
    synchronize();
  }) : undefined;
  resize?.observe(region);
  if (!resize) window.addEventListener('resize', () => {
    dirty = true;
    synchronize();
  }, { signal: events.signal });

  image.addEventListener('load', () => {
    loaded = true;
    dirty = true;
    synchronize();
  }, { signal: events.signal });
  image.addEventListener('error', () => {
    failed = true;
    stop();
  }, { signal: events.signal });

  const unsubscribe = onMotionChange((value) => {
    allowed = value;
    synchronize();
  });
  region.dataset.initialized = 'true';
  window.addEventListener('pagehide', (event) => {
    pageActive = false;
    stop();
    if (!event.persisted) {
      unsubscribe();
      visibility?.disconnect();
      resize?.disconnect();
      events.abort();
    }
  }, { signal: events.signal });
  window.addEventListener('pageshow', () => {
    pageActive = true;
    allowed = motionAllowed();
    synchronize();
  }, { signal: events.signal });
}
