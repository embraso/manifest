import { actions } from '../actions';

export const opening = {
  intro: [
    { type: 'text', text: 'A Embraso é uma iniciativa para reunir pessoas e criar ' },
    { type: 'strong', text: 'software útil e livre' },
    { type: 'text', text: ', pensado para as diferentes realidades do Brasil.' },
  ],
  manifestoLink: actions.readManifesto,
  participationLink: 'Como participar dessa construção',
} as const;
