import { introduction, invitation, principles } from '../data/manifesto';

const terminal = document.querySelector<HTMLElement>('[data-local-terminal]');

if (terminal && !terminal.dataset.initialized) {
  const form = terminal.querySelector<HTMLFormElement>('[data-terminal-form]');
  const input = terminal.querySelector<HTMLInputElement>('input[name="comando"]');
  const output = terminal.querySelector<HTMLElement>('[data-terminal-output]');
  const announcement = terminal.querySelector<HTMLElement>('[data-terminal-announcement]');
  const controls = terminal.querySelector<HTMLElement>('[data-terminal-controls]');
  const completions = terminal.querySelector<HTMLElement>('[data-command-completions]');
  const options = terminal.querySelector<HTMLUListElement>('[data-command-options]');
  const empty = terminal.querySelector<HTMLElement>('[data-command-empty]');

  if (form && input && output && announcement && controls && completions && options && empty) {
    const listeners = new AbortController();
    const history: string[] = [];
    let historyIndex = 0;
    let draft = '';
    let readingCount = 0;
    const commands = [
      { name: 'ajuda', description: 'Conheça os comandos de leitura.' },
      { name: 'manifesto', description: 'Leia a apresentação e os seis princípios.' },
      ...principles.map((principle, index) => ({ name: `principio ${index + 1}`, description: principle.title })),
      { name: 'comunidade', description: 'Participação, troca e conhecimentos diferentes.' },
      { name: 'autonomia', description: 'Escolhas, dependências e continuidade.' },
      { name: 'limpar', description: 'Limpe o painel de leitura, sem apagar o histórico de comandos.' },
    ];
    let matches = commands;
    let activeIndex = -1;

    function normalize(value: string) {
      return value.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').replace(/\s+/g, ' ');
    }

    function closeSuggestions() {
      completions!.hidden = true;
      input!.setAttribute('aria-expanded', 'false');
      input!.removeAttribute('aria-activedescendant');
      options!.querySelector('[aria-selected="true"]')?.setAttribute('aria-selected', 'false');
      activeIndex = -1;
    }

    function showSuggestions() {
      const partial = normalize(input!.value);
      matches = commands.filter((command) => command.name.startsWith(partial));
      activeIndex = -1;
      input!.removeAttribute('aria-activedescendant');
      options!.replaceChildren();
      matches.forEach((command, index) => {
        const option = document.createElement('li');
        option.id = `command-option-${index}`;
        option.dataset.command = command.name;
        option.setAttribute('role', 'option');
        option.setAttribute('aria-selected', 'false');
        const name = document.createElement('span');
        name.className = 'command-name';
        name.textContent = command.name;
        const description = document.createElement('span');
        description.className = 'command-description';
        description.textContent = command.description;
        option.append(name, description);
        options!.append(option);
      });
      empty!.hidden = matches.length > 0;
      completions!.hidden = false;
      input!.setAttribute('aria-expanded', 'true');
      announcement!.textContent = matches.length
        ? `${matches.length} ${matches.length === 1 ? 'comando disponível' : 'comandos disponíveis'}. Use as setas para escolher.`
        : 'Nenhum comando corresponde. Digite ajuda para ver as opções.';
    }

    function selectSuggestion(index: number) {
      options!.querySelector('[aria-selected="true"]')?.setAttribute('aria-selected', 'false');
      activeIndex = index;
      const option = options!.children[index];
      option.setAttribute('aria-selected', 'true');
      input!.setAttribute('aria-activedescendant', option.id);
    }

    function executeCommand(command: string) {
      input!.focus({ preventScroll: true });
      closeSuggestions();
      runCommand(command);
      input!.value = '';
    }

    function runCommand(raw: string) {
      const command = raw.trim().slice(0, 120);
      if (!command) {
        announcement!.textContent = 'Digite um comando, como ajuda, ou escolha um dos botões de leitura.';
        return;
      }

      const normalized = normalize(command);
      if (history[history.length - 1] !== command) {
        history.push(command);
        if (history.length > 24) history.shift();
      }
      historyIndex = history.length;
      draft = '';
      readingCount += 1;

      let title = '';
      let paragraphs: string[] = [];
      let error = false;
      let link: { label: string; href: string } | undefined;

      if (normalized === 'limpar') {
        output!.replaceChildren();
        title = 'Leitura limpa.';
        paragraphs = ['O conteúdo anterior saiu deste painel. Use ajuda para escolher outra leitura. Com as sugestões fechadas (Esc), as setas no campo percorrem os últimos 24 comandos desta visita.'];
      } else if (normalized === 'ajuda') {
        title = 'Escolha o que quer ler.';
        paragraphs = [
          'ajuda — mostra os comandos disponíveis.',
          'manifesto — lê a apresentação e os seis princípios.',
          'principio 1 até principio 6 — lê um princípio por inteiro.',
          'comunidade — lê sobre participação e conhecimentos diferentes.',
          'autonomia — lê sobre escolhas, dependências e continuidade.',
          'limpar — limpa o painel de leitura.',
          'Você pode escrever com ou sem acento, em maiúsculas ou minúsculas. Esta leitura acontece no navegador, sem executar comandos de sistema nem enviar o que você digita.',
          'Ao focar ou digitar, as sugestões aparecem junto ao campo. Use ↑ e ↓ para marcar uma opção e Enter para lê-la. Sem opção marcada, Enter lê o que você digitou. Tab completa apenas um comando parcial; no comando completo, segue a navegação. Esc fecha as sugestões; com elas fechadas, ↑ e ↓ percorrem seu histórico.',
        ];
      } else if (normalized === 'manifesto') {
        title = 'Liberdade se constrói junto.';
        paragraphs = [...introduction];
        principles.forEach((principle, index) => {
          paragraphs.push(`${index + 1}. ${principle.title}`, principle.lead, principle.body);
        });
        link = { label: 'Abrir a página do manifesto', href: '/manifesto/' };
      } else if (normalized === 'principio' || normalized.startsWith('principio ')) {
        const indexText = normalized.slice('principio'.length).trim();
        if (!/^[1-6]$/.test(indexText)) {
          error = true;
          title = 'Escolha um princípio de 1 a 6.';
          paragraphs = ['Use principio seguido de um único número: por exemplo, principio 3. Para ler todos em ordem, use manifesto.'];
        } else {
          const index = Number(indexText) - 1;
          const principle = principles[index];
          title = `${index + 1}. ${principle.title}`;
          paragraphs = [principle.lead, principle.body];
          link = { label: 'Ler os seis princípios na página do manifesto', href: '/manifesto/' };
        }
      } else if (normalized === 'comunidade') {
        title = 'Construir com quem vive os problemas.';
        paragraphs = [
          invitation.introduction,
          invitation.body,
          'Conhecer o problema, melhorar uma explicação, desenhar, traduzir, pensar acessibilidade, testar e cuidar da manutenção também são contribuições. Você não precisa saber programar ou ter disponibilidade toda semana.',
          'Comunidade não é mão de obra disponível. Colaboração voluntária não deve ser obrigação; entusiasmo não substitui condições de trabalho e remuneração justa.',
          'A iniciativa está tomando forma. Aqui, o primeiro passo disponível é conhecer a proposta e pensar no que faria sentido construir junto.',
        ];
        link = { label: 'Ler sobre as formas de participação', href: '#participacao' };
      } else if (normalized === 'autonomia') {
        title = 'Poder escolher. Poder continuar.';
        paragraphs = [
          'Autonomia digital não é fazer tudo sozinho. É compreender o que usamos, conhecer dependências e preservar caminhos para recuperar dados, adaptar ferramentas, migrar e continuar.',
          principles[1].body,
          principles[5].body,
          'Isso passa por formatos compreensíveis, padrões abertos, documentação e conhecimento compartilhado. A possibilidade de sair precisa fazer parte da decisão de chegar.',
          'Comunidade e autonomia se sustentam: queremos que mais pessoas possam entender as escolhas, participar delas e cuidar do que for construído.',
        ];
        link = { label: 'Ler a proposta da Embraso', href: '#proposta' };
      } else {
        error = true;
        title = 'Este comando não faz parte da leitura.';
        paragraphs = [`“${command}” não é um comando disponível. Use ajuda para ver as opções, manifesto para ler tudo ou principio 1 até principio 6 para uma leitura específica.`, 'Este terminal não é um shell de sistema: ele só consulta os textos da Embraso.'];
      }

      const entry = document.createElement('article');
      entry.className = error ? 'reading-entry reading-error' : 'reading-entry';
      const executed = document.createElement('p');
      executed.className = 'executed-command';
      executed.textContent = `> ${command}`;
      const heading = document.createElement('h3');
      heading.textContent = title;
      entry.append(executed, heading);
      for (const text of paragraphs) {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        entry.append(paragraph);
      }
      if (link) {
        const paragraph = document.createElement('p');
        const anchor = document.createElement('a');
        anchor.href = link.href;
        anchor.textContent = link.label;
        paragraph.append(anchor);
        entry.append(paragraph);
      }
      output!.append(entry);
      while (output!.children.length > 12) output!.firstElementChild?.remove();
      output!.scrollTop += entry.getBoundingClientRect().top - output!.getBoundingClientRect().top;
      announcement!.textContent = `Leitura ${readingCount}. ${title} ${error ? paragraphs[0] : 'Conteúdo disponível no histórico de leitura do terminal.'}`;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      executeCommand(activeIndex >= 0 ? matches[activeIndex].name : input.value);
    }, { signal: listeners.signal });

    controls.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const button = event.target.closest<HTMLButtonElement>('button[data-command]');
      if (!button?.dataset.command) return;
      executeCommand(button.dataset.command);
    }, { signal: listeners.signal });

    input.addEventListener('focus', showSuggestions, { signal: listeners.signal });
    input.addEventListener('input', () => {
      historyIndex = history.length;
      draft = input.value;
      showSuggestions();
    }, { signal: listeners.signal });
    input.addEventListener('blur', closeSuggestions, { signal: listeners.signal });

    options.addEventListener('pointerdown', (event) => {
      // Options use the input's virtual focus, including for touch selection.
      event.preventDefault();
    }, { signal: listeners.signal });
    options.addEventListener('click', (event) => {
      if (!(event.target instanceof Element)) return;
      const option = event.target.closest<HTMLElement>('[role="option"][data-command]');
      if (option?.dataset.command) executeCommand(option.dataset.command);
    }, { signal: listeners.signal });

    input.addEventListener('keydown', (event) => {
      if (event.isComposing || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.key === 'Escape') {
        if (!completions.hidden) event.preventDefault();
        closeSuggestions();
        return;
      }
      if (event.key === 'Tab') {
        const partial = normalize(input.value);
        const partialMatches = commands.filter((command) => command.name.startsWith(partial));
        if (!event.shiftKey && partial && !commands.some((command) => command.name === partial) && partialMatches.length) {
          event.preventDefault();
          input.value = (!completions.hidden && activeIndex >= 0 ? matches[activeIndex] : partialMatches[0]).name;
          input.setSelectionRange(input.value.length, input.value.length);
        }
        closeSuggestions();
        return;
      }
      if (event.shiftKey || (event.key !== 'ArrowUp' && event.key !== 'ArrowDown')) return;
      if (!completions.hidden) {
        if (!matches.length) return;
        event.preventDefault();
        const next = activeIndex < 0
          ? (event.key === 'ArrowDown' ? 0 : matches.length - 1)
          : (activeIndex + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % matches.length;
        selectSuggestion(next);
        return;
      }
      if (!history.length) return;
      event.preventDefault();
      if (historyIndex === history.length) draft = input.value;
      historyIndex = event.key === 'ArrowUp' ? Math.max(0, historyIndex - 1) : Math.min(history.length, historyIndex + 1);
      input.value = historyIndex === history.length ? draft : history[historyIndex];
      input.setSelectionRange(input.value.length, input.value.length);
    }, { signal: listeners.signal });

    terminal.dataset.initialized = 'true';
    form.hidden = false;
    controls.hidden = false;
    window.addEventListener('pagehide', (event) => {
      if (!event.persisted) listeners.abort();
    }, { signal: listeners.signal });
  }
}
