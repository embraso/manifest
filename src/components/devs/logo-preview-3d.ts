import * as THREE from 'three';
import { motionAllowed, onMotionChange } from '../../scripts/motion';

const scenes = new WeakMap<HTMLElement, () => void>();
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

for (const root of document.querySelectorAll<HTMLElement>('[data-embraso-3d]')) {
  if (scenes.has(root) || reducedMotion.matches) continue;

  const canvas = root.querySelector<HTMLCanvasElement>('canvas');
  const field = root.closest<HTMLElement>('[data-fauna-field]');
  const image = field?.querySelector<HTMLImageElement>('[data-fauna-source]');
  if (!canvas || !field || !image) continue;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  } catch {
    root.dataset.failed = 'true';
    continue;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 3000);
  camera.position.z = 440;
  scene.add(new THREE.HemisphereLight(0xfff2d5, 0x173522, 2.1));
  const key = new THREE.DirectionalLight(0xffd783, 3.2);
  key.position.set(-260, 360, 700);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xb3dec2, 1.7);
  fill.position.set(300, -180, 450);
  scene.add(fill);

  const emblem = new THREE.Group();
  scene.add(emblem);
  let visible = false;
  let pageActive = true;
  let allowed = motionAllowed();
  let frame = 0;
  let destroyed = false;
  let startedAt = performance.now();
  let setupComplete = false;

  const render = (now: number) => {
    frame = 0;
    if (destroyed || !visible || !pageActive || document.hidden) return;
    emblem.rotation.y = allowed ? ((now - startedAt) * 0.00055) % (Math.PI * 2) : 0;
    emblem.rotation.x = -0.025;
    renderer.render(scene, camera);
    if (allowed) frame = requestAnimationFrame(render);
  };
  const requestRender = () => {
    if (!frame && visible && pageActive && !document.hidden && !destroyed) frame = requestAnimationFrame(render);
  };
  const resize = () => {
    const bounds = root.getBoundingClientRect();
    if (!bounds.width || !bounds.height) return;
    renderer.setSize(bounds.width, bounds.height, false);
    camera.aspect = bounds.width / bounds.height;
    camera.updateProjectionMatrix();
    const scale = Math.min(bounds.width * 0.84, bounds.height * 0.74) / 620;
    emblem.scale.setScalar(scale);
    requestRender();
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) requestRender();
    else if (frame) cancelAnimationFrame(frame);
    if (!visible) frame = 0;
  });
  observer.observe(root);
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(root);
  const onVisibility = () => {
    if (document.hidden && frame) cancelAnimationFrame(frame);
    frame = 0;
    requestRender();
  };
  const onMotion = (value: boolean) => {
    allowed = value;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (allowed && setupComplete) {
      startedAt = performance.now();
      resize();
      renderer.render(scene, camera);
      field.dataset.voxelReady = 'true';
      root.dataset.ready = 'true';
    } else {
      delete field.dataset.voxelReady;
      delete root.dataset.ready;
    }
    requestRender();
  };
  document.addEventListener('visibilitychange', onVisibility);
  const unsubscribe = onMotionChange(onMotion);

  const dispose = () => {
    if (destroyed) return;
    destroyed = true;
    if (frame) cancelAnimationFrame(frame);
    observer.disconnect();
    resizeObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    unsubscribe();
    scene.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      const materials = Array.isArray(object.material) ? object.material : [object.material];
      materials.forEach((material) => material.dispose());
    });
    renderer.dispose();
    delete field.dataset.voxelReady;
    scenes.delete(root);
  };
  const onPageHide = (event: PageTransitionEvent) => {
    pageActive = false;
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    if (!event.persisted) dispose();
  };
  const onPageShow = () => {
    pageActive = true;
    onMotion(motionAllowed());
  };
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('pageshow', onPageShow);
  root.addEventListener('astro:unmount', dispose, { once: true });
  scenes.set(root, dispose);

  void (async () => {
    try {
      await image.decode();
      if (destroyed) return;
      const sampleWidth = 36;
      const sampleHeight = 51;
      const pixelCanvas = document.createElement('canvas');
      pixelCanvas.width = sampleWidth;
      pixelCanvas.height = sampleHeight;
      const pixelContext = pixelCanvas.getContext('2d', { willReadFrequently: true });
      if (!pixelContext) throw new Error('Pixel sampling is unavailable');
      pixelContext.drawImage(image, 0, 0, sampleWidth, sampleHeight);
      const pixels = pixelContext.getImageData(0, 0, sampleWidth, sampleHeight).data;
      const palette = [0xfdb112, 0xf56d1d, 0xfbf7ec, 0x0560a2, 0x148040, 0x13522f];
      const channels = palette.map((color) => [(color >> 16) & 255, (color >> 8) & 255, color & 255]);
      const voxels = palette.map(() => [] as [number, number][]);
      for (let row = 0; row < sampleHeight; row += 1) {
        for (let column = 0; column < sampleWidth; column += 1) {
          const offset = (row * sampleWidth + column) * 4;
          if (pixels[offset + 3] < 96) continue;
          const red = pixels[offset];
          const green = pixels[offset + 1];
          const blue = pixels[offset + 2];
          let nearest = 0;
          let nearestDistance = Infinity;
          channels.forEach(([r, g, b], index) => {
            const distance = (red - r) ** 2 + (green - g) ** 2 + (blue - b) ** 2;
            if (distance < nearestDistance) {
              nearest = index;
              nearestDistance = distance;
            }
          });
          voxels[nearest].push([column, row]);
        }
      }
      const cellWidth = 462 / sampleWidth;
      const cellHeight = 654 / sampleHeight;
      const matrix = new THREE.Object3D();
      voxels.forEach((coordinates, index) => {
        if (!coordinates.length) return;
        const geometry = new THREE.BoxGeometry(cellWidth * 0.94, cellHeight * 0.94, 24);
        const material = new THREE.MeshStandardMaterial({ color: palette[index], roughness: 0.62, metalness: 0.08 });
        const mesh = new THREE.InstancedMesh(geometry, material, coordinates.length);
        coordinates.forEach(([column, row], instance) => {
          matrix.position.set((column + 0.5) * cellWidth - 462 / 2, 654 / 2 - (row + 0.5) * cellHeight, 0);
          matrix.updateMatrix();
          mesh.setMatrixAt(instance, matrix.matrix);
        });
        mesh.instanceMatrix.needsUpdate = true;
        mesh.computeBoundingSphere();
        emblem.add(mesh);
      });
      if (!emblem.children.length) throw new Error('Emblem SVG contains no opaque pixels');
      setupComplete = true;
      resize();
      if (allowed) {
        renderer.render(scene, camera);
        field.dataset.voxelReady = 'true';
        root.dataset.ready = 'true';
      }
    } catch {
      root.dataset.failed = 'true';
      dispose();
    }
  })();

  resize();
}
