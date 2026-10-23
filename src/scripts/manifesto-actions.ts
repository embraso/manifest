const root = document.querySelector<HTMLElement>('[data-manifesto-actions]');
const status = document.querySelector<HTMLElement>('[data-manifesto-status]');
const article = document.querySelector<HTMLElement>('[data-manifesto-document]');
const printButton = document.querySelector<HTMLButtonElement>('[data-manifesto-print]');
const copyLinkButton = document.querySelector<HTMLButtonElement>('[data-manifesto-copy-link]');
const copyTextButton = document.querySelector<HTMLButtonElement>('[data-manifesto-copy-text]');

if (root && status && article && printButton && copyLinkButton && copyTextButton) {
  const copyButtons = [copyLinkButton, copyTextButton];
  let pending = false;

  function report(message: string): void {
    status.textContent = message;
  }

  function setCopyPending(value: boolean): void {
    pending = value;
    for (const button of copyButtons) button.setAttribute('aria-disabled', String(value));
  }

  async function copyToClipboard(text: string, copiedMessage: string): Promise<void> {
    if (pending) return;
    setCopyPending(true);
    report('');
    try {
      await navigator.clipboard.writeText(text);
      report(copiedMessage);
    } catch {
      report(root.dataset.copyFailed!);
    } finally {
      setCopyPending(false);
    }
  }

  printButton.addEventListener('click', () => {
    window.print();
  });

  copyLinkButton.addEventListener('click', () => {
    void copyToClipboard(root.dataset.shareUrl!, root.dataset.linkCopied!);
  });

  copyTextButton.addEventListener('click', () => {
    void copyToClipboard(article.innerText, root.dataset.textCopied!);
  });

  for (const button of [printButton, ...copyButtons]) button.hidden = false;
}
