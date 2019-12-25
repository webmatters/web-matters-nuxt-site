<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Projects</h1>
        <div class="columns">
          <div
            v-for="product in products"
            :key="product._id"
            class="column is-one-quarter"
          >
            <product-card :product="product" />
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <h1 class="title">Featured Articles</h1>
        <div class="columns">
          <div class="column is-one-quarter">
            <blog-card />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hero from '@/components/shared/Hero.vue'
import ProductCard from '@/components/ProductCard.vue'
import BlogCard from '@/components/BlogCard.vue'

export default {
  components: {
    Hero,
    ProductCard,
    BlogCard
  },
  computed: {
    ...mapState({
      products: state => state.product.items
    })
  },
  async fetch({ store }) {
    await store.dispatch('product/fetchProducts')
  }
}
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>
