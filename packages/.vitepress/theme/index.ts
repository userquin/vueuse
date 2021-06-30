import { handleRedirects } from './redirects'
import { VPTheme } from '@vue/theme'

import './styles/code.css'
import './styles/demo.css'
import './styles/utils.css'
import 'windi.css'

const theme = {
  ...VPTheme,
  enhanceApp(ctx) {
    VPTheme.enhanceApp?.(ctx)
    if (typeof window !== 'undefined')
      handleRedirects(ctx.router)
  },
}

export default theme
