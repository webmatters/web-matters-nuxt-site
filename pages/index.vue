<template>
  <div>
    <hero />
    <section class="section">
      <div class="container">
        <h1 class="title">Projects</h1>
        <div class="columns">
          <div
            v-for="project in projects"
            :key="project._id"
            class="column is-one-quarter"
          >
            <project-card :project="project" />
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
import ProjectCard from '@/components/ProjectCard.vue'
import BlogCard from '@/components/BlogCard.vue'

export default {
  components: {
    Hero,
    ProjectCard,
    BlogCard
  },
  async fetch({ store }) {
    await store.dispatch('project/fetchProjects')
  },
  computed: {
    ...mapState({
      projects: state => state.project.items
    })
  },
  head: {
    title: 'Web Matters'
  }
}
</script>

<style scoped lang="scss">
// Home page
.links {
  padding-top: 15px;
}
</style>
