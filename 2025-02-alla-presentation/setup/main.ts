import { defineAppSetup } from '@slidev/types'
import { locales, currentLang } from '../locales'

// Expose the current language's texts to every slide as `t`.
export default defineAppSetup(({ app }) => {
  const lang = currentLang()
  document.documentElement.lang = lang
  app.config.globalProperties.t = locales[lang]
})
