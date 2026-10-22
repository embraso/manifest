export type RichMessageToken =
  | { readonly type: 'text'; readonly text: string }
  | { readonly type: 'break'; readonly footer?: 'break' | 'space' }
  | { readonly type: 'strong'; readonly text: string }
  | { readonly type: 'emphasis'; readonly text: string }
  | { readonly type: 'accent'; readonly text: string }
  | { readonly type: 'mark'; readonly text: string };
