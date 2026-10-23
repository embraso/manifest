import { actions } from '../actions';

export const manifesto = {
  heading: [
    { type: 'text', text: 'Uma direção.' },
    { type: 'break' },
    { type: 'text', text: 'Seis princípios.' },
  ],
  description: 'O que abrir, o que proteger, de quem depender e a quem ouvir. O manifesto orienta as escolhas difíceis, mas não é uma obra pronta.',
  link: actions.readManifestoFull,
} as const;
