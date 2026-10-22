import { actions } from '../actions';

export const manifesto = {
  heading: [
    { type: 'text', text: 'Uma direção.' },
    { type: 'break' },
    { type: 'text', text: 'Seis princípios.' },
  ],
  description: 'O que abrir. O que proteger. De quem depender. Quem ouvir. O manifesto orienta as escolhas difíceis — não é a obra pronta.',
  link: actions.readManifestoFull,
  readingHint: 'Abra os princípios para ler.',
} as const;
