export const state = () => ({ items: [] })

export const actions = {
  fetchProducts({ commit }) {
    return this.$axios.$get('/api/v1/products').then(products => {
      commit(
        'setItems',
        { resource: 'product', items: products },
        { root: true }
      )
      return state.items
    })
  }
}
