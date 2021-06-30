import { handleRedirects } from './redirects'
import { VPTheme } from '@vue/theme'
import DemoContainer from './components/DemoContainer.vue'
import Note from './components/Note.vue'
import ReloadPrompt from './components/ReloadPrompt.vue'

import './styles/code.css'
import './styles/demo.css'
import './styles/utils.css'
import 'windi.css'

const theme = {
  ...VPTheme,
  enhanceApp(ctx) {
    VPTheme.enhanceApp?.(ctx)

    ctx.app.component('DemoContainer', DemoContainer)
    ctx.app.component('Note', Note)
    ctx.app.component('ReloadPrompt', ReloadPrompt)

    if (typeof window !== 'undefined')
      handleRedirects(ctx.router)
  },
}

export default theme
