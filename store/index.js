export const state = () => ({
  appbar: {
    tabs: []
  },
  login: {
    display: null
  },
  user: {
    login: null
  }
})

export const mutations = {
  filling_appbar_tabs(state, data) {
    state.appbar.tabs = data
  },

  set_login_display(state, data) {
    state.login.display = data
  }
}
