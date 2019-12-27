export const state = () => ({ items: [] })

export const actions = {
  fetchProjects({ commit }) {
    return this.$axios.$get('/api/v1/projects').then(projects => {
      commit(
        'setItems',
        { resource: 'project', items: projects },
        { root: true }
      )
      return state.items
    })
  }
}
