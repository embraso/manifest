const carousel = document.querySelector<HTMLElement>('[data-command-carousel]');

if (carousel && !carousel.dataset.enhanced) {
  const readings = [...carousel.querySelectorAll<HTMLElement>('[data-reading]')];
  const topics = [...carousel.querySelectorAll<HTMLAnchorElement>('[data-topic]')];
  const command = carousel.querySelector<HTMLElement>('[data-typed-command]');
  const workspaceTitle = carousel.querySelector<HTMLElement>('[data-workspace-title]');
  const viewport = carousel.querySelector<HTMLElement>('[data-carousel-readings]');
  const controls = carousel.querySelector<HTMLElement>('[data-carousel-controls]');
  const previous = carousel.querySelector<HTMLButtonElement>('[data-carousel-previous]');
  const next = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
  const pause = carousel.querySelector<HTMLButtonElement>('[data-carousel-pause]');
  const position = carousel.querySelector<HTMLElement>('[data-topic-position]');
  const state = carousel.querySelector<HTMLElement>('[data-carousel-state]');
  const progress = carousel.querySelector<HTMLElement>('[data-sequence-progress]');
  const announcement = carousel.querySelector<HTMLElement>('[data-carousel-announcement]');

  if (readings.length && readings.length === topics.length && command && viewport && workspaceTitle && controls && previous && next && pause && position && state && progress && announcement) {
    const listeners = new AbortController();
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let index = 0;
    let visible = false;
    let locallyPaused = false;
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
      return !preference.matches && !document.hidden && visible && pageActive && !locallyPaused;
    }

    function synchronizeControls() {
      const paused = locallyPaused || preference.matches;
      pause!.disabled = preference.matches;
      pause!.setAttribute('aria-pressed', String(paused));
      pause!.setAttribute('aria-label', preference.matches ? carousel!.dataset.stateReduced! : locallyPaused ? carousel!.dataset.stateResume! : carousel!.dataset.statePause!);
      state!.textContent = preference.matches ? carousel!.dataset.stateReduced! : locallyPaused ? carousel!.dataset.statePaced! : carousel!.dataset.stateSequence!;
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
      readings.forEach((reading, item) => { reading.hidden = item !== index; });
      topics.forEach((topic, item) => {
        if (item === index) topic.setAttribute('aria-current', 'true');
        else topic.removeAttribute('aria-current');
      });
      viewport!.scrollTop = 0;
      position!.textContent = String(index + 1).padStart(2, '0');
      workspaceTitle!.textContent = readings[index]!.dataset.workspaceTitle || workspaceTitle!.dataset.defaultTitle!;
      command!.textContent = readings[index]!.dataset.command!;
      if (manual) announcement!.textContent = carousel!.dataset.announcementTemplate!
        .replaceAll('{current}', String(index + 1))
        .replaceAll('{total}', String(readings.length))
        .replaceAll('{title}', readings[index]!.dataset.workspaceTitle || (readings[index]!.querySelector('h3')?.textContent?.trim() ?? ''));
      // Keep the current choice visible in the horizontally scrollable mobile locator.
      const navigation = topics[index]!.closest<HTMLElement>('.topic-navigation')!;
      const navigationRect = navigation.getBoundingClientRect();
      const topicRect = topics[index]!.getBoundingClientRect();
      if (topicRect.left < navigationRect.left || topicRect.right > navigationRect.right) {
        navigation.scrollLeft += topicRect.left - navigationRect.left - (navigation.clientWidth - topics[index]!.offsetWidth) / 2;
      }
      synchronizeControls();
      if (canPlay()) {
        started = true;
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

    carousel.dataset.enhanced = 'true';
    controls.hidden = false;
    selectTopic(0, false);
    preference.addEventListener('change', synchronizePlayback, { signal: listeners.signal });
    document.addEventListener('visibilitychange', synchronizePlayback, { signal: listeners.signal });
    const observer = new IntersectionObserver(([entry]) => {
      if (visible === entry.isIntersecting) return;
      visible = entry.isIntersecting;
      synchronizePlayback();
    }, { threshold: 0 });
    observer.observe(carousel);
    window.addEventListener('pagehide', (event) => {
      pageActive = false;
      synchronizePlayback();
      if (!event.persisted) {
        listeners.abort();
        observer.disconnect();
      }
    }, { signal: listeners.signal });
    window.addEventListener('pageshow', () => {
      if (pageActive) return;
      pageActive = true;
      synchronizePlayback();
    }, { signal: listeners.signal });
  }
}
