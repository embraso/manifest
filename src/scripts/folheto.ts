import { motionAllowed, onMotionChange } from './motion';

function enhanceFolheto(root: HTMLElement) {
  const scene = root.querySelector<HTMLElement>('[data-print-scene]');
  const reader = root.querySelector<HTMLElement>('[data-freedom-reader]');
  const controls = root.querySelector<HTMLFieldSetElement>('[data-freedom-controls]');
  const pages = Array.from(root.querySelectorAll<HTMLElement>('[data-freedom-page]'));
  const choices = Array.from(root.querySelectorAll<HTMLInputElement>('input[name="freedom"]'));
  const status = root.querySelector<HTMLElement>('[data-freedom-status]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let sceneVisible = false;
  let readerVisible = false;
  let pageActive = true;
  let sceneFinished = false;
  let sceneAnimations: Animation[] = [];
  let readingAnimation: Animation | undefined;
  let disposed = false;

  function animatePart(selector: string, frames: Keyframe[]) {
    const element = scene?.querySelector<HTMLElement>(selector);
    if (!element) return;
    const animation = element.animate(frames, {
      duration: 14000,
      iterations: 2,
      easing: 'linear',
      fill: 'none',
    });
    animation.pause();
    sceneAnimations.push(animation);
  }

  function assemblePrint() {
    if (!scene || typeof scene.animate !== 'function') return;
    // The print starts and ends complete. Two finite circuits, no arrival gate.
    animatePart('[data-print-toucan]', [
      { transform: 'translate(0, 0) rotate(0deg)', offset: 0 },
      { transform: 'translate(-22%, -10%) rotate(-8deg)', offset: .12, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      { transform: 'translate(4%, -24%) rotate(3deg)', offset: .32, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      { transform: 'translate(12%, 7%) rotate(7deg)', offset: .54, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      { transform: 'translate(-5%, 4%) rotate(-3deg)', offset: .76, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      { transform: 'translate(0, 0) rotate(0deg)', offset: 1 },
    ]);
    animatePart('[data-print-capybara]', [
      { transform: 'translate(0, 0)', offset: 0 },
      { transform: 'translate(0, 0)', offset: .28 },
      { transform: 'translate(7%, -3%) rotate(-2deg)', offset: .39 },
      { transform: 'translate(11%, 0) rotate(0deg)', offset: .49 },
      { transform: 'translate(11%, 0) rotate(0deg)', offset: .66 },
      { transform: 'translate(0, 0)', offset: .88, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      { transform: 'translate(0, 0)', offset: 1 },
    ]);
    animatePart('[data-print-ipe]', [
      { transform: 'rotate(0deg)', offset: 0 },
      { transform: 'rotate(-4deg)', offset: .18 },
      { transform: 'rotate(3deg)', offset: .38 },
      { transform: 'rotate(-2deg)', offset: .6 },
      { transform: 'rotate(0deg)', offset: .86 },
      { transform: 'rotate(0deg)', offset: 1 },
    ]);
    if (sceneAnimations[0]) sceneAnimations[0].onfinish = () => { sceneFinished = true; };
  }

  function syncMotion() {
    if (disposed) return;
    if (reducedMotion.matches) {
      for (const animation of sceneAnimations) animation.cancel();
      sceneAnimations = [];
      readingAnimation?.cancel();
      readingAnimation = undefined;
      return;
    }
    const allowed = pageActive && motionAllowed();
    if (allowed && sceneVisible && !sceneFinished && sceneAnimations.length === 0) assemblePrint();
    for (const animation of sceneAnimations) {
      if (animation.playState === 'finished') continue;
      if (allowed && sceneVisible) animation.play();
      else animation.pause();
    }
    if (readingAnimation && readingAnimation.playState !== 'finished') {
      if (allowed && readerVisible) readingAnimation.play();
      else readingAnimation.pause();
    }
  }

  function selectFreedom(announce: boolean) {
    const choice = choices.find((input) => input.checked);
    if (!choice) return;
    const selectedIndex = pages.findIndex((page) => page.dataset.freedomPage === choice.value);
    if (selectedIndex < 0) return;
    readingAnimation?.cancel();
    readingAnimation = undefined;
    pages.forEach((page, index) => { page.hidden = index !== selectedIndex; });
    const selectedPage = pages[selectedIndex];
    const title = selectedPage.querySelector('h3')?.textContent ?? '';
    if (status) {
      status.hidden = false;
      status.textContent = `Lendo: ${title}. Liberdade ${selectedIndex + 1} de ${pages.length}.`;
    }
    if (announce && readerVisible && pageActive && motionAllowed() && !reducedMotion.matches && typeof selectedPage.animate === 'function') {
      // A print wipe connects the chosen control to its actual reading, not a reveal on scroll.
      readingAnimation = selectedPage.animate([
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0 0 0)' },
      ], { duration: 360, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'none' });
    }
  }

  function onSelection(event: Event) {
    if (event.target instanceof HTMLInputElement && event.target.name === 'freedom') selectFreedom(true);
  }
  function onPageHide() { pageActive = false; syncMotion(); }
  function onPageShow() { pageActive = true; syncMotion(); }

  if (controls && pages.length === choices.length && pages.length > 0) {
    selectFreedom(false);
    controls.hidden = false;
    controls.addEventListener('change', onSelection);
  }

  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === scene) sceneVisible = entry.isIntersecting;
      if (entry.target === reader) readerVisible = entry.isIntersecting;
    }
    syncMotion();
  }, { threshold: .08 }) : undefined;
  if (observer) {
    if (scene) observer.observe(scene);
    if (reader) observer.observe(reader);
  }
  // No observer: retain the complete static print rather than run unseen work.
  const unsubscribe = onMotionChange(syncMotion);
  reducedMotion.addEventListener('change', syncMotion);
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('pageshow', onPageShow);
  document.addEventListener('astro:before-swap', () => {
    disposed = true;
    unsubscribe();
    observer?.disconnect();
    controls?.removeEventListener('change', onSelection);
    reducedMotion.removeEventListener('change', syncMotion);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    for (const animation of sceneAnimations) animation.cancel();
    readingAnimation?.cancel();
  }, { once: true });
}

const folheto = document.querySelector<HTMLElement>('[data-folheto]');
if (folheto) enhanceFolheto(folheto);
