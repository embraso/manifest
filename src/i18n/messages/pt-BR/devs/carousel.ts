import { actions } from '../actions';

export const carousel = {
  locator: 'Índice de tópicos',
  principles: 'Seis princípios',
  principlesLink: 'Ler no manifesto',
  roleDescription: 'carrossel',
  heading: [
    { type: 'text', text: 'Seis princípios,' },
    { type: 'break' },
    { type: 'text', text: 'lidos no ' },
    { type: 'emphasis', text: 'terminal' },
  ],
  intro: 'Os critérios que queremos levar para o código. Explore cada princípio no seu ritmo.',
  workspace: 'embraso / leitura',
  workspaceNotice: 'Este espaço é só para leitura.',
  selectedContent: 'Conteúdo do tópico selecionado',
  sequence: 'Em sequência',
  previous: 'Tópico anterior',
  pause: 'Pausar sequência',
  resume: 'Retomar sequência',
  next: 'Próximo tópico',
  reducedMotion: actions.reducedMotion,
  paced: 'No seu ritmo',
  announcement: 'Tópico {current} de {total}. {title}.',
} as const;
