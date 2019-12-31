export const state = () => ({ items: [], item: {}, canUpdateProject: false })

export const mutations = {
  setProjects(state, projects) {
    state.items = projects
  },
  setProject(state, project) {
    state.item = project
  },
  addLine(state, field) {
    state.item[field].push({ value: '' })
  },
  removeLine(state, { field, index }) {
    state.item[field].splice(index, 1)
  },
  setLineValue(state, { index, value, field }) {
    state.item[field][index].value = value
  },
  setProjectValue(state, { value, field }) {
    state.item[field] = value
  },
  setCanUpdateProject(state, canUpdate) {
    state.canUpdateProject = canUpdate
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
  },
  updateProject({ commit, state }) {
    const project = state.item
    return this.$axios
      .$patch(`/api/v1/projects/${project._id}`, project)
      .then(project => {
        commit('setProject', project)
        commit('setCanUpdateProject', false)
        return state.item
      })
      .catch(error => Promise.reject(error))
  },
  // TODO: Cache previous value and compare to current value to set disabled state of save button
  updateLine({ commit }, { index, value, field }) {
    commit('setLineValue', { index, value, field })
    commit('setCanUpdateProject', true)
  },
  updateProjectValue({ commit }, { value, field }) {
    commit('setProjectValue', { value, field })
    commit('setCanUpdateProject', true)
  }
}
