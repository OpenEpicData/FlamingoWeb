export const state = () => ({
  appbar: {
    tabs: []
  }
})

export const mutations = {
  filling_appbar_tabs(state, data) {
    state.appbar.tabs = data
  }
}
