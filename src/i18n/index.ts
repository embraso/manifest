import type { RichMessageToken } from './rich';
import { devs } from './messages/pt-BR/devs';
import { home } from './messages/pt-BR/home';
import { manifesto } from './messages/pt-BR/manifesto';
import { shell } from './messages/pt-BR/shell';

const ptBR = { shell, home, devs, manifesto } as const;

type Widen<T> = T extends string
  ? string
  : T extends readonly RichMessageToken[]
    ? readonly RichMessageToken[]
    : T extends readonly unknown[]
      ? { readonly [Key in keyof T]: Widen<T[Key]> }
      : T extends object
        ? { readonly [Key in keyof T]: Key extends 'id' | 'href' | 'type' ? T[Key] : Widen<T[Key]> }
        : T;

export type Messages = Widen<typeof ptBR>;

const messagesByLocale = {
  'pt-BR': ptBR,
} satisfies Record<string, Messages>;

export type Locale = keyof typeof messagesByLocale;
export const supportedLocales = Object.freeze(Object.keys(messagesByLocale) as Locale[]);
export const defaultLocale: Locale = 'pt-BR';

export function resolveLocale(value: string): Locale {
  if (Object.prototype.hasOwnProperty.call(messagesByLocale, value)) return value as Locale;
  throw new RangeError(`Unsupported locale: ${value}`);
}

export function getMessages(locale: string): Messages {
  return messagesByLocale[resolveLocale(locale)];
}
