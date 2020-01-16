export default {

  addTabs(state, item) {
    let hastab = state.tab.find(ele => {
      return ele.name === item.key
    })
    if (!hastab) {
      state.tab.push({
        title: item.title,
        name: item.key,
        link: `/${item.key}`
      })
      state.tabIndex = item.key
    }
  },
  changeTabIndex(state, index) {
    state.tabIndex = index
  },
  removeTabs(state, item) {
    if (state.tab.length <= 1) {
      return;
    }
    let tabs = state.tab.filter((ele, index) => {
      if (ele.name === item.key) {
        if (index > 0) {
          state.tabIndex = state.tab[index - 1].name
        }
        if (index == 0) {
          state.tabIndex = state.tab[index + 1].name
        }
        return false
      }
      return true

    })
    state.tab = tabs;

  },
  changeDefaultTab(state, item) {
    state.tab = [item]
  },
  setToken(state, token) {
    state.token = token;
  }
}
