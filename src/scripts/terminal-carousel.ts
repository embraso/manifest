import { onMotionChange } from './motion';

const carousel = document.querySelector<HTMLElement>('[data-command-carousel]');

if (carousel && !carousel.dataset.enhanced) {
  const readings = [...carousel.querySelectorAll<HTMLElement>('[data-reading]')];
  const topics = [...carousel.querySelectorAll<HTMLAnchorElement>('[data-topic]')];
  const command = carousel.querySelector<HTMLElement>('[data-typed-command]');
  const viewport = carousel.querySelector<HTMLElement>('[data-carousel-readings]');
  const controls = carousel.querySelector<HTMLElement>('[data-carousel-controls]');
  const previous = carousel.querySelector<HTMLButtonElement>('[data-carousel-previous]');
  const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const pause = carousel.querySelector<HTMLButtonElement>('[data-carousel-pause]');
  const position = carousel.querySelector<HTMLElement>('[data-topic-position]');
  const state = carousel.querySelector<HTMLElement>('[data-carousel-state]');
  const progress = carousel.querySelector<HTMLElement>('[data-sequence-progress]');
  const announcement = carousel.querySelector<HTMLElement>('[data-carousel-announcement]');

  if (readings.length && readings.length === topics.length && command && viewport && controls && previous && next && pause && position && state && progress && announcement) {
    const listeners = new AbortController();
    let index = 0;
    let allowed = false;
    let visible = false;
    let locallyPaused = false;
    let hoveringReading = false;
    let focusingReading = false;
    let pageActive = true;
    let started = false;
    let timer: number | undefined;
    let progressAnimation: Animation | undefined;
    let readingAnimation: Animation | undefined;

    function cancelWork() {
      window.clearTimeout(timer);
      timer = undefined;
      progressAnimation?.cancel();
      readingAnimation?.cancel();
    }

    function canPlay() {
      return allowed && visible && pageActive && !locallyPaused && !hoveringReading && !focusingReading;
    }

    function synchronizeControls() {
      const paused = locallyPaused || !allowed;
      pause!.disabled = !allowed;
      pause!.setAttribute('aria-pressed', String(paused));
      pause!.setAttribute('aria-label', !allowed ? 'Sequência pausada pelo controle de movimento' : locallyPaused ? 'Retomar sequência' : 'Pausar sequência');
      state!.textContent = !allowed ? 'Movimento pausado' : locallyPaused ? 'No seu ritmo' : hoveringReading || focusingReading ? 'Em leitura' : 'Em sequência';
      carousel!.dataset.playback = canPlay() ? 'running' : 'paused';
    }

    function scheduleReading() {
      carousel!.dataset.phase = 'reading';
      if (!canPlay()) return;
      const words = readings[index].textContent?.trim().split(/\s+/).length ?? 0;
      const duration = Math.min(18000, 9000 + words * 35);
      progressAnimation = progress!.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration, easing: 'linear', fill: 'forwards' });
      timer = window.setTimeout(() => selectTopic(index + 1, false), duration);
    }

    function typeCommand() {
      const text = readings[index].dataset.command!;
      let length = 0;
      command!.textContent = '';
      carousel!.dataset.phase = 'typing';
      const type = () => {
        if (!canPlay()) return;
        length += 1;
        command!.textContent = text.slice(0, length);
        if (length < text.length) timer = window.setTimeout(type, 65);
        else scheduleReading();
      };
      type();
    }

    function selectTopic(requested: number, manual: boolean) {
      cancelWork();
      index = (requested + readings.length) % readings.length;
      if (manual) locallyPaused = true;
      readings.forEach((reading, item) => { reading.hidden = item !== index; });
      topics.forEach((topic, item) => {
        if (item === index) topic.setAttribute('aria-current', 'true');
        else topic.removeAttribute('aria-current');
      });
      viewport!.scrollTop = 0;
      position!.textContent = String(index + 1).padStart(2, '0');
      command!.textContent = readings[index].dataset.command!;
      if (manual) announcement!.textContent = `Tópico ${index + 1} de ${readings.length}. ${topics[index].textContent!.trim()}. Sequência pausada; retome quando quiser.`;
      // Keep the current choice in the mobile topic strip without moving the page.
      const navigation = topics[index].parentElement!;
      const topicLeft = topics[index].offsetLeft - navigation.offsetLeft;
      if (navigation.scrollWidth > navigation.clientWidth) {
        navigation.scrollLeft = topicLeft - (navigation.clientWidth - topics[index].offsetWidth) / 2;
      }
      synchronizeControls();
      if (canPlay()) {
        readingAnimation = readings[index].animate([{ opacity: .55, transform: 'translateY(5px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 280, easing: 'cubic-bezier(.16, 1, .3, 1)' });
        typeCommand();
      } else carousel!.dataset.phase = 'reading';
    }

    function synchronizePlayback() {
      cancelWork();
      command!.textContent = readings[index].dataset.command!;
      synchronizeControls();
      if (canPlay()) {
        if (!started) {
          started = true;
          typeCommand();
        } else scheduleReading();
      } else carousel!.dataset.phase = 'reading';
    }

    topics.forEach((topic, item) => topic.addEventListener('click', (event) => {
      event.preventDefault();
      selectTopic(item, true);
    }, { signal: listeners.signal }));
    previous.addEventListener('click', () => selectTopic(index - 1, true), { signal: listeners.signal });
    next.addEventListener('click', () => selectTopic(index + 1, true), { signal: listeners.signal });
    pause.addEventListener('click', () => {
      locallyPaused = !locallyPaused;
      synchronizePlayback();
    }, { signal: listeners.signal });
    viewport.addEventListener('pointerenter', (event) => {
      if (event.pointerType !== 'mouse') return;
      hoveringReading = true;
      synchronizePlayback();
    }, { signal: listeners.signal });
    viewport.addEventListener('pointerleave', () => {
      hoveringReading = false;
      synchronizePlayback();
    }, { signal: listeners.signal });
    // Touch scrolling is an explicit request to keep this reading on screen.
    viewport.addEventListener('touchstart', () => {
      locallyPaused = true;
      synchronizePlayback();
    }, { signal: listeners.signal, passive: true });
    carousel.addEventListener('focusin', (event) => {
      focusingReading = event.target instanceof Element && !event.target.closest('.playback-controls');
      synchronizePlayback();
    }, { signal: listeners.signal });
    carousel.addEventListener('focusout', (event) => {
      if (event.relatedTarget instanceof Node && carousel.contains(event.relatedTarget)) return;
      focusingReading = false;
      synchronizePlayback();
    }, { signal: listeners.signal });

    carousel.dataset.enhanced = 'true';
    controls.hidden = false;
    selectTopic(0, false);
    const unsubscribeMotion = onMotionChange((value) => {
      allowed = value;
      synchronizePlayback();
    });
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      synchronizePlayback();
    }, { threshold: .15 });
    observer.observe(viewport);
    window.addEventListener('pagehide', (event) => {
      pageActive = false;
      synchronizePlayback();
      if (!event.persisted) {
        listeners.abort();
        observer.disconnect();
        unsubscribeMotion();
      }
    }, { signal: listeners.signal });
    window.addEventListener('pageshow', () => {
      pageActive = true;
      synchronizePlayback();
    }, { signal: listeners.signal });
  }
}
