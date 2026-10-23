import { motionAllowed, onMotionChange } from '../../scripts/motion';

const root = document.querySelector<HTMLElement>('[data-folheto]');
const reader = root?.querySelector<HTMLElement>('[data-motivation-reader]');
const controls = root?.querySelector<HTMLFieldSetElement>('[data-motivation-controls]');
const pages = Array.from(root?.querySelectorAll<HTMLElement>('[data-motivation-page]') ?? []);
const choices = Array.from(root?.querySelectorAll<HTMLInputElement>('input[name="motivation"]') ?? []);
const status = root?.querySelector<HTMLElement>('[data-motivation-status]');

if (reader && controls && pages.length === choices.length && pages.length > 0) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let readerVisible = false;
  let pageActive = true;
  let disposed = false;
  let readingAnimation: Animation | undefined;

  function selectMotivation(announce: boolean) {
    const choice = choices.find((input) => input.checked);
    if (!choice) return;
    const selectedIndex = pages.findIndex((page) => page.dataset.motivationPage === choice.value);
    if (selectedIndex < 0) return;

    readingAnimation?.cancel();
    readingAnimation = undefined;
    pages.forEach((page, index) => { page.hidden = index !== selectedIndex; });
    const selectedPage = pages[selectedIndex];
    const title = selectedPage.querySelector('h3')?.textContent ?? '';
    if (status) {
      status.hidden = false;
      status.textContent = status.dataset.statusTemplate!
        .replace('{title}', title)
        .replace('{current}', String(selectedIndex + 1))
        .replace('{total}', String(pages.length));
    }
    if (announce && readerVisible && pageActive && motionAllowed() && !reducedMotion.matches && typeof selectedPage.animate === 'function') {
      readingAnimation = selectedPage.animate([
        { clipPath: 'inset(0 100% 0 0)' },
        { clipPath: 'inset(0 0 0 0)' },
      ], { duration: 360, easing: 'cubic-bezier(.16, 1, .3, 1)', fill: 'none' });
    }
  }

  function onSelection(event: Event) {
    if (event.target instanceof HTMLInputElement && event.target.name === 'motivation') selectMotivation(true);
  }
  function synchronizeAnimation() {
    if (disposed) return;
    if (reducedMotion.matches) {
      readingAnimation?.cancel();
      readingAnimation = undefined;
      return;
    }
    if (readingAnimation && readingAnimation.playState !== 'finished') {
      if (pageActive && motionAllowed() && readerVisible) readingAnimation.play();
      else readingAnimation.pause();
    }
  }
  function onPageHide() { pageActive = false; synchronizeAnimation(); }
  function onPageShow() { pageActive = true; synchronizeAnimation(); }
  const dispose = () => {
    disposed = true;
    unsubscribe();
    observer?.disconnect();
    controls.removeEventListener('change', onSelection);
    reducedMotion.removeEventListener('change', synchronizeAnimation);
    window.removeEventListener('pagehide', onPageHide);
    window.removeEventListener('pageshow', onPageShow);
    readingAnimation?.cancel();
  };

  const observer = typeof IntersectionObserver === 'function' ? new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.target === reader) readerVisible = entry.isIntersecting;
    }
    synchronizeAnimation();
  }, { threshold: .08 }) : undefined;
  const unsubscribe = onMotionChange(synchronizeAnimation);
  reducedMotion.addEventListener('change', synchronizeAnimation);
  window.addEventListener('pagehide', onPageHide);
  window.addEventListener('pageshow', onPageShow);
  document.addEventListener('astro:before-swap', dispose, { once: true });
  if (observer) observer.observe(reader);
  selectMotivation(false);
  controls.hidden = false;
  controls.addEventListener('change', onSelection);
}
