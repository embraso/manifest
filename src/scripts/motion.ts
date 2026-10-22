type MotionListener = (allowed: boolean) => void;

const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
const listeners = new Set<MotionListener>();
const storageKey = 'embraso-motion-paused';
let manuallyPaused = false;

try {
  manuallyPaused = sessionStorage.getItem(storageKey) === 'true';
} catch {
  // The motion control also works when browser storage is unavailable.
}

export function motionAllowed(): boolean {
  return !manuallyPaused && !preference.matches && !document.hidden;
}

export function onMotionChange(listener: MotionListener): () => void {
  listeners.add(listener);
  listener(motionAllowed());
  return () => listeners.delete(listener);
}

function synchronizeMotion(): void {
  const allowed = motionAllowed();
  document.body.dataset.motion = allowed ? 'running' : 'paused';

  document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
    button.hidden = false;
    button.disabled = preference.matches;
    button.setAttribute('aria-pressed', String(manuallyPaused || preference.matches));
    const label = button.querySelector<HTMLElement>('[data-motion-label]');
    if (!label) return;
    button.title = preference.matches
      ? label.dataset.motionReducedTitle!
      : label.dataset.motionControlTitle!;
    label.textContent = preference.matches
      ? label.dataset.motionReduced!
      : manuallyPaused ? label.dataset.motionResume! : label.dataset.motionPause!;
  });

  for (const listener of listeners) listener(allowed);
}

function toggleMotion(): void {
  if (preference.matches) return;
  manuallyPaused = !manuallyPaused;
  try {
    sessionStorage.setItem(storageKey, String(manuallyPaused));
  } catch {
    // Storage is optional; the in-page state is authoritative.
  }
  synchronizeMotion();
}

document.querySelectorAll<HTMLButtonElement>('[data-motion-toggle]').forEach((button) => {
  button.addEventListener('click', toggleMotion);
});
preference.addEventListener('change', synchronizeMotion);
document.addEventListener('visibilitychange', synchronizeMotion);
synchronizeMotion();
