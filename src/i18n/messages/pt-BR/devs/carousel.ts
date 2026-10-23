import { actions } from '../actions';

export const commands = {
  about: 'sobre nós',
  community: 'comunidade',
  autonomy: 'autonomia',
} as const;

export const carousel = {
  topics: [
    {
      title: 'Sobre nós',
      href: '/manifesto/',
      link: actions.readManifestoFull,
    },
    {
      title: 'Comunidade',
      href: '#participacao',
      link: 'Conhecer as formas de participação',
    },
    {
      title: 'Autonomia',
      href: '#proposta',
      link: 'Ler a proposta',
    },
  ],
  locator: 'Índice de tópicos',
  framingTopics: 'Sobre nós',
  principles: 'Seis princípios',
  principlesLink: 'Ler no manifesto',
  roleDescription: 'carrossel',
  heading: [
    { type: 'text', text: 'Manifesto,' },
    { type: 'break' },
    { type: 'text', text: 'objetivos e ' },
    { type: 'emphasis', text: 'princípios' },
  ],
  intro: 'Software começa com gente. Os comandos percorrem a proposta e os princípios que queremos levar para o código.',
  navigation: 'Tópicos de leitura',
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
