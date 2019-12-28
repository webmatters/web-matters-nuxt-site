export const state = () => ({ items: [] })

export const actions = {
  fetchClientProjects({ commit }) {
    return this.$axios
      .$get('/api/v1/projects/user-projects')
      .then(projects => {
        commit('setProjects', projects)
        return state.items
      })
      .catch(error => Promise.reject(error))
  },
  createProject(context, projectData) {
    return this.$axios
      .$post('/api/v1/projects', projectData)
      .catch(error => Promise.reject(error))
  }
}

export const mutations = {
  setProjects(state, projects) {
    state.items = projects
  }
}
