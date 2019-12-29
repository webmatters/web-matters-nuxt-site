export const state = () => ({ items: [], item: {} })

export const mutations = {
  setProjects(state, projects) {
    state.items = projects
  },
  setProject(state, project) {
    state.item = project
  }
}

export const actions = {
  fetchClientProjects({ commit, state }) {
    return this.$axios
      .$get('/api/v1/projects/user-projects')
      .then(projects => {
        commit('setProjects', projects)
        return state.items
      })
      .catch(error => Promise.reject(error))
  },
  fetchProjectById({ commit, state }, projectId) {
    return this.$axios
      .$get(`/api/v1/projects/${projectId}`)
      .then(project => {
        commit('setProject', project)
        return state.item
      })
      .catch(error => Promise.reject(error))
  },
  createProject(context, projectData) {
    return this.$axios
      .$post('/api/v1/projects', projectData)
      .catch(error => Promise.reject(error))
  }
}
