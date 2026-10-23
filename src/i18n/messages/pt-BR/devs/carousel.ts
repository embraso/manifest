import { actions } from '../actions';

export const commands = {
  manifesto: 'manifesto',
  community: 'comunidade',
  autonomy: 'autonomia',
  principles: ['principio 1', 'principio 2', 'principio 3', 'principio 4', 'principio 5', 'principio 6'],
} as const;

export const carousel = {
  topics: [
    {
      label: 'Sobre nós',
      title: 'Conhecimento que encontra propósito.',
      summary: 'Aproximar ferramentas e conhecimento de quem conhece os problemas permite criar coisas úteis, trocar experiências e descobrir o inesperado.',
      href: '/manifesto/',
      link: actions.readManifestoFull,
    },
    {
      label: 'Comunidade',
      title: 'A gente nasceu para viver em comunidade.',
      summary: 'Comunidade é espaço de troca, aprendizado e relações. Participar não exige saber programar nem ter disponibilidade constante.',
      href: '#participacao',
      link: 'Conhecer as formas de participação',
    },
    {
      label: 'Nossos objetivos',
      title: 'Escolher também é poder mudar.',
      summary: 'Compreender ferramentas e dependências ajuda a recuperar dados, mudar de serviço e dar continuidade ao que foi construído.',
      href: '#proposta',
      link: 'Ler a proposta',
    },
  ],
  locator: 'Índice de tópicos',
  framingTopics: 'Sobre nós',
  principles: 'Seis princípios',
  communityParagraph: 'Comunidade é lugar de troca, aprendizado e relações — não uma fila de tarefas. Participar não exige saber programar nem ter tempo toda semana.',
  autonomyParagraphs: [
    'Autonomia digital não é fazer tudo sozinho. É compreender o que usamos, conhecer dependências e preservar caminhos para recuperar dados, adaptar ferramentas, migrar e continuar.',
    'Comunidade e autonomia se sustentam: queremos compartilhar conhecimento para que mais pessoas possam participar das escolhas e cuidar do que for construído.',
  ],
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
