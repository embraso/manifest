import { actions } from '../actions';

export const closing = {
  heading: [
    { type: 'text', text: 'Que problema' },
    { type: 'break' },
    { type: 'text', text: 'você conhece' },
    { type: 'break' },
    { type: 'emphasis', text: 'por dentro?' },
  ],
  reading: 'Uma boa pergunta já é um começo. Antes de propor mais um aplicativo, queremos entender o que já funciona, o que falta e o que vale construir junto.',
  principles: 'Conheça os princípios que orientam essa iniciativa.',
  link: actions.startWithManifesto,
} as const;
