export const state = () => ({
  siteData: null,
  isMobile: false,
  diffLevels: [
    'Easy',
    'Intermediate',
    'Difficult',
    'Expert'
  ],
  currentDiff: 0,
  showGrid: false,
  mobileMenuOpen: false
})

export const mutations = {
  updateData: (state, data) => {
    state.siteData = data
  },
  setIsMobile: (state, bool) => {
    state.isMobile = bool
  },
  setCurrentDiff: (state, num) => {
    state.currentDiff = num
  },
  setShowGrid: (state, bool) => {
    state.showGrid = bool
  },
  setMobileMenuOpen: (state, bool) => {
    state.mobileMenuOpen = bool
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    console.log('nuxt server init--get data')

    const globalData = this.$prismic.api.getSingle('global_data', {
      'fetchLinks': [
        'project.title'
      ]
    })

    const infoPage = this.$prismic.api.getSingle('info_page')

    const projects = this.$prismic.api.query(
      [
        this.$prismic.predicates.at('document.type', 'project')
      ]
    )

    await Promise.all([globalData, infoPage, projects])
      .then(values => {
        const dataObj = {
          globalData: values[0],
          infoPage: values[1],
          projects: values[2]
        }

        commit('updateData', dataObj)
      })
      .catch(error => {
        console.log(error)
      })
  },
  setIsMobile ({commit}, bool) {
    commit('setIsMobile', bool)
  },
  setCurrentDiff ({commit}, num) {
    commit('setCurrentDiff', num)
  },
  setShowGrid ({commit}, bool) {
    commit('setShowGrid', bool)
  },
  setMobileMenuOpen ({commit}, bool) {
    commit('setMobileMenuOpen', bool)
  }
}

export const getters = {
  currentLevel: state => {
    return state.diffLevels[state.currentDiff]
  }
}