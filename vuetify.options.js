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
        primary: '#3C5A99',
        secondary: '#E8E8E8',
        accent: '#E86250',
        error: '#E63B3B',
        warning: '#EA634B',
        info: '#3C5A99',
        success: '#3BE691',
        bg_primary: '#f6f6f9',
        bg_secondary: '#F2F2F5'
      }
    }
  }
}
