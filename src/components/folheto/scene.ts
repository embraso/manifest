import { motionAllowed, onMotionChange } from '../../scripts/motion';

function enhanceScene(scene: HTMLElement) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = false;
  let pageActive = true;
  let finished = false;
  let disposed = false;
  let animations: Animation[] = [];

  function animatePart(selector: string, frames: Keyframe[], timing: KeyframeAnimationOptions = {}) {
    const element = scene.querySelector(selector);
    if (!element) return;
    const animation = element.animate(frames, {
      duration: 14000,
      iterations: 2,
      easing: 'linear',
      fill: 'none',
      ...timing,
    });
    animation.pause();
    animations.push(animation);
  }

  function assemble() {
    if (typeof scene.animate !== 'function') return;
    // Every part starts complete and settles back to the static illustration at 28s.
    animatePart('[data-print-toucan]', [
      { transform: 'translate(0, 0) rotate(0deg)', offset: 0, easing: 'ease-out' },
      { transform: 'translate(1%, -9%) rotate(-3deg)', offset: .125, easing: 'ease-in' },
      { transform: 'translate(2%, 0) rotate(0deg)', offset: .25, easing: 'ease-out' },
      { transform: 'translate(1%, 7%) rotate(2deg)', offset: .375, easing: 'ease-in' },
      { transform: 'translate(0, 0) rotate(0deg)', offset: .5, easing: 'ease-out' },
      { transform: 'translate(-1%, -12%) rotate(-4deg)', offset: .625, easing: 'ease-in' },
      { transform: 'translate(-2%, 0) rotate(0deg)', offset: .75, easing: 'ease-out' },
      { transform: 'translate(-1%, 6%) rotate(2deg)', offset: .875, easing: 'ease-in' },
      { transform: 'translate(0, 0) rotate(0deg)', offset: 1 },
    ]);
    animatePart('[data-print-capybara]', [
      { transform: 'translateX(0)', offset: 0, easing: 'ease-in-out' },
      { transform: 'translateX(3%)', offset: .5, easing: 'ease-in-out' },
      { transform: 'translateX(0)', offset: 1 },
    ]);
    animatePart('[data-print-capybara-gait]', [
      { transform: 'translateY(0) rotate(0deg)', easing: 'ease-in-out' },
      { transform: 'translateY(-1.5%) rotate(-.6deg)', easing: 'ease-in-out' },
      { transform: 'translateY(0) rotate(0deg)' },
    ], { duration: 1750, iterations: 16 });
    animatePart('[data-print-ipe]', [
      { transform: 'rotate(0deg)', offset: 0 },
      { transform: 'rotate(-4deg)', offset: .18 },
      { transform: 'rotate(3deg)', offset: .38 },
      { transform: 'rotate(-2deg)', offset: .6 },
      { transform: 'rotate(0deg)', offset: .86 },
      { transform: 'rotate(0deg)', offset: 1 },
    ]);
    for (let index = 0; index < 3; index++) {
      animatePart(`[data-print-wind="${index}"]`, [
        { transform: 'translateX(16px)', opacity: 0, offset: 0 },
        { opacity: 0, offset: .05 + index * .12 },
        { opacity: .65, offset: .16 + index * .1 },
        { opacity: .65, offset: .35 + index * .1 },
        { opacity: 0, offset: .65 + index * .1 },
        { transform: 'translateX(-36px)', opacity: 0, offset: 1 },
      ], { duration: 3500, iterations: 8 });
    }
    if (animations[0]) animations[0].onfinish = () => { finished = true; };
  }

  function syncMotion() {
    if (disposed) return;
    if (reducedMotion.matches) {
      for (const animation of animations) animation.cancel();
      animations = [];
      return;
    }
    const running = pageActive && visible && motionAllowed();
    if (running && !finished && animations.length === 0) assemble();
    for (const animation of animations) {
      if (animation.playState === 'finished') continue;
      if (running) animation.play();
      else animation.pause();
    }
  }

  function onPageHide() { pageActive = false; syncMotion(); }
  function onPageShow() { pageActive = true; syncMotion(); }

  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    syncMotion();
  }, { threshold: .08 }) : undefined;
  // Without intersection observation, retain the complete static composition.
  observer?.observe(scene);
  const unsubscribe = onMotionChange(syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('pageshow', onPageShow);
  document.addEventListener('astro:before-swap', () => {
    disposed = true;
    unsubscribe();
    observer?.disconnect();
    reducedMotion.removeEventListener('change', syncMotion);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    for (const animation of animations) animation.cancel();
  }, { once: true });
}

const scene = document.querySelector<HTMLElement>('[data-print-scene]');
if (scene) enhanceScene(scene);
