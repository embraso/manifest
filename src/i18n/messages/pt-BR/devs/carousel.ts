import { actions } from '../actions';

export const commands = {
  manifesto: 'manifesto',
  community: 'comunidade',
  autonomy: 'autonomia',
  principles: ['principio 1', 'principio 2', 'principio 3', 'principio 4', 'principio 5', 'principio 6'],
} as const;

export const carousel = {
  topics: [
    { label: 'Por que construir', title: 'Conhecimento que encontra propósito.', href: '/manifesto/', link: actions.readManifestoFull },
    { label: 'Com quem construir', title: 'Gente antes da stack.', href: '#participacao', link: 'Conhecer as formas de participação' },
    { label: 'Poder continuar', title: 'Escolher também é poder mudar.', href: '#proposta', link: 'Ler a proposta' },
  ],
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
