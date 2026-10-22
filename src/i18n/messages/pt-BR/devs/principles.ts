import { actions } from '../actions';

export const principles = {
  heading: [
    { type: 'text', text: 'O que não queremos' },
    { type: 'break' },
    { type: 'emphasis', text: 'deixar implícito.' },
  ],
  description: 'Seis princípios para orientar as decisões difíceis. Não são funcionalidades já entregues: são a direção da construção que queremos começar.',
  manifestoLink: actions.readManifestoFull,
} as const;
