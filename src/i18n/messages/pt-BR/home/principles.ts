import { actions } from '../actions';

export const manifesto = {
  heading: [
    { type: 'text', text: 'Uma direção.' },
    { type: 'break' },
    { type: 'text', text: 'Seis princípios.' },
  ],
  description: 'O manifesto ajuda a manter nossas escolhas alinhadas ao que queremos construir.',
  link: actions.readManifestoFull,
  readingHint: 'Abra os princípios para ler.',
} as const;
