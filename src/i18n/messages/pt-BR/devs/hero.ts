import { actions } from '../actions';

export const opening = {
  intro: 'Queremos reunir pessoas para construir software útil e livre, compartilhar conhecimento e ampliar a autonomia digital nas diferentes realidades do Brasil.',
  manifestoLink: actions.readManifesto,
  exploreLink: 'Explorar pelo terminal',
  fetchWindowTitle: 'EmbrasoFetch',
  fetchPrompt: 'user@embraso:~',
  fetchCommand: 'embrasofetch',
  fetchTitle: 'Embraso',
  fetchProfileLabel: 'tipo',
  fetchProfile: 'iniciativa',
  fetchFocusLabel: 'foco',
  fetchFocus: 'software útil e livre',
  fetchBaseLabel: 'base',
  fetchBase: 'conhecimento compartilhado',
  fetchContextLabel: 'contexto',
  fetchContextValue: 'realidades diversas do Brasil',
  fetchPrinciplesLabel: 'critérios',
  fetchPrinciples: '6 princípios para construir e manter software',
  fetchDirectionLabel: 'direção',
  fetchDirection: 'ampliar a autonomia e soberania digital',
} as const;
