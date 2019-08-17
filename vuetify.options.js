import zhHans from 'vuetify/es5/locale/zh-Hans'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

export default {
  // breakpoint: {},
  icons: {
    iconfont: 'mdi'
  },
  lang: {
    locales: { zhHans },
    current: 'zhHans'
  },
  rtl: false,
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#2196F3',
        secondary: '#1E88E5',
        accent: '#90CAF9',
        error: '#D50000',
        warning: '#FFD600',
        info: '#03A9F4',
        success: '#4CAF50'
      }
    }
  }
}
