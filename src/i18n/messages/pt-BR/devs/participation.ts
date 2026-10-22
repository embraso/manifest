import { actions } from '../actions';

export const participation = {
  heading: [
    { type: 'text', text: 'Nem toda contribuição' },
    { type: 'break' },
    { type: 'emphasis', text: 'é um commit.' },
  ],
  lead: 'Quem conhece o problema também tem o que construir.',
  body: 'Queremos aproximar quem programa, desenha, escreve, pesquisa, traduz, ensina, organiza e cuida. Não é preciso dominar as ferramentas, chegar com uma solução pronta ou ter tempo toda semana.',
  possibilities: [
    'Trazer o contexto de um problema real.',
    'Tornar uma explicação mais compreensível.',
    'Pensar acessibilidade, testar e documentar.',
    'Compartilhar conhecimento e cuidar da continuidade.',
  ],
  status: 'A iniciativa está tomando forma. O primeiro passo disponível aqui é conhecer a proposta e pensar no que faria sentido construir junto.',
  link: actions.startWithManifesto,
  imageAlt: 'Capivara na ilustração pixelada da Embraso',
  question: [
    { type: 'text', text: 'Que problema' },
    { type: 'break' },
    { type: 'text', text: 'você conhece' },
    { type: 'break' },
    { type: 'emphasis', text: 'por dentro?' },
  ],
  caption: 'Uma boa pergunta já é um começo.',
  closeLead: 'Seu interesse não cria uma dívida.',
  close: 'Construir junto também é respeitar o tempo de cada pessoa.',
} as const;
