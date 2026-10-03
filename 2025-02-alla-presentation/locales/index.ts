// All languages of the deck. To add one: copy es.ts to xx.ts, translate, register it here.
import en, { type Messages } from './en'
import es from './es'

export const locales: Record<string, Messages> = { en, es }

// Language comes from ?lang=xx in the URL, else from VITE_LANG at build/export time, else English.
export function currentLang(): string {
  const q = new URLSearchParams(location.search).get('lang')
  if (q && q in locales) return q
  const env = import.meta.env.VITE_LANG
  return env && env in locales ? env : 'en'
}

declare module 'vue' {
  interface ComponentCustomProperties {
    t: Messages
  }
}
