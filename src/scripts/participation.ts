const ideaLinks = document.querySelectorAll<HTMLAnchorElement>('a[data-idea-link]');
const ideaHashes = new Set<string>();
for (const link of ideaLinks) {
  if (link.hash) ideaHashes.add(link.hash);
}

function ideaFieldFor(hash: string): HTMLTextAreaElement | undefined {
  const target = document.getElementById(decodeURIComponent(hash.slice(1)));
  if (!target) return undefined;
  return target instanceof HTMLTextAreaElement ? target : target.querySelector<HTMLTextAreaElement>('textarea') ?? undefined;
}

function focusIdeaField(hash: string): void {
  if (!ideaHashes.has(hash)) return;
  requestAnimationFrame(() => ideaFieldFor(hash)?.focus({ preventScroll: true }));
}

if (ideaHashes.size > 0) {
  window.addEventListener('hashchange', (event) => focusIdeaField(new URL(event.newURL).hash));
  for (const link of ideaLinks) {
    link.addEventListener('click', () => {
      if (link.hash === location.hash) focusIdeaField(link.hash);
    });
  }
  if (ideaHashes.has(location.hash)) focusIdeaField(location.hash);
}
