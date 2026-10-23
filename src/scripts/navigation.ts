type NavigationMode = 'compact' | 'wide';

const navigation = document.querySelector<HTMLDetailsElement>('[data-site-navigation]');
const toggle = navigation?.querySelector<HTMLElement>('[data-navigation-toggle]');
const panel = navigation?.querySelector<HTMLElement>('[data-navigation-panel]');
const firstPrimaryLink = panel?.querySelector<HTMLAnchorElement>('.main-navigation a[href]');

if (navigation && toggle && panel && firstPrimaryLink) {
  const wideViewport = window.matchMedia('(min-width: 1024px)');
  let disposed = false;

  function closeNavigation(restoreFocus: boolean): void {
    if (!navigation.open) return;
    if (restoreFocus && panel.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
    navigation.open = false;
  }

  function synchronizeNavigation(): void {
    if (disposed) return;
    const nextMode: NavigationMode = wideViewport.matches ? 'wide' : 'compact';
    if (navigation.dataset.navigationMode === nextMode) {
      if (nextMode === 'wide') navigation.open = true;
      return;
    }

    if (nextMode === 'wide') {
      navigation.open = true;
      if (toggle.contains(document.activeElement)) {
        firstPrimaryLink.focus({ preventScroll: true });
      }
      navigation.dataset.navigationMode = 'wide';
      return;
    }

    delete navigation.dataset.navigationMode;
    if (panel.contains(document.activeElement)) {
      toggle.focus({ preventScroll: true });
    }
    navigation.open = false;
    navigation.dataset.navigationMode = 'compact';
  }

  function onNavigationClick(event: MouseEvent): void {
    if (wideViewport.matches || event.defaultPrevented || !(event.target instanceof Element)) return;

    if (toggle.contains(event.target)) {
      if (navigation.open && panel.contains(document.activeElement)) {
        toggle.focus({ preventScroll: true });
      }
      return;
    }

    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest<HTMLAnchorElement>('a[href]');
    if (!link || !panel.contains(link)) return;
    const target = link.target.toLowerCase();
    if (link.hasAttribute('download') || (target !== '' && target !== '_self')) return;
    closeNavigation(false);
  }

  function onDocumentClick(event: MouseEvent): void {
    if (wideViewport.matches || !navigation.open || !(event.target instanceof Node)) return;
    if (!navigation.contains(event.target)) closeNavigation(true);
  }

  function onNavigationFocusOut(event: FocusEvent): void {
    if (wideViewport.matches || !navigation.open) return;
    const { relatedTarget } = event;
    if (!(relatedTarget instanceof Node) || navigation.contains(relatedTarget)) return;
    closeNavigation(false);
  }

  function onDocumentKeydown(event: KeyboardEvent): void {
    if (event.defaultPrevented || event.key !== 'Escape' || wideViewport.matches || !navigation.open) return;
    event.preventDefault();
    closeNavigation(true);
  }

  function dispose(): void {
    if (disposed) return;
    disposed = true;
    navigation.removeEventListener('click', onNavigationClick);
    navigation.removeEventListener('focusout', onNavigationFocusOut);
    document.removeEventListener('click', onDocumentClick);
    document.removeEventListener('keydown', onDocumentKeydown);
    wideViewport.removeEventListener('change', synchronizeNavigation);
    window.removeEventListener('pageshow', synchronizeNavigation);
    document.removeEventListener('astro:before-swap', dispose);
  }

  navigation.addEventListener('click', onNavigationClick);
  navigation.addEventListener('focusout', onNavigationFocusOut);
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onDocumentKeydown);
  wideViewport.addEventListener('change', synchronizeNavigation);
  window.addEventListener('pageshow', synchronizeNavigation);
  document.addEventListener('astro:before-swap', dispose, { once: true });
  synchronizeNavigation();
}
