<template>
  <div>
    <client-header title="">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <nuxt-link
            to="/client/project/create"
            class="button is-medium is-light"
          >
            New Project
          </nuxt-link>
          <nuxt-link
            to="/"
            class="button is-danger is-medium is-inverted is-outlined"
          >
            Guest
          </nuxt-link>
        </div>
      </template>
    </client-header>
    <div class="projects-page">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <h1 class="projects-page-title">Your Projects</h1>
            <!-- Iterate Projects -->
            <div
              v-for="project in projects"
              :key="project._id"
              class="tile is-ancestor"
            >
              <div class="tile is-parent is-12">
                <!-- Navigate to project manage page -->
                <nuxt-link
                  :to="'#'"
                  class="tile tile-overlay-container is-child box"
                >
                  <div class="tile-overlay">
                    <span class="tile-overlay-text">
                      Update Project
                    </span>
                  </div>
                  <div class="columns">
                    <div class="column is-narrow">
                      <figure class="image is-4by2 is-128x128">
                        <img
                          :src="
                            project.image || 'https://via.placeholder.com/150'
                          "
                        />
                      </figure>
                    </div>
                    <div class="column">
                      <p class="title">
                        {{ project.title }}
                      </p>
                      <p class="subtitle">
                        {{ project.subtitle || 'Subtitle not provided' }}
                      </p>
                      <span
                        :class="createProjectStatus(project.status)"
                        class="tag"
                        >{{ project.status }}</span
                      >
                    </div>
                    <div class="column is-narrow flex-centered"></div>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientHeader from '@/components/shared/ClientHeader.vue'

export default {
  layout: 'client',
  components: {
    ClientHeader
  },
  fetch({ store }) {
    return store.dispatch('client/project/fetchClientProjects')
  },
  computed: {
    projects() {
      return this.$store.state.client.project.items
    }
  },
  methods: {
    createProjectStatus(status) {
      if (!status) return ''
      if (status === 'complete') return 'is-success'
      if (status === 'active') return 'is-primary'
      if (status === 'inactive') return 'is-warning'
      if (status === 'canceled') return 'is-danger'
    }
  }
}
</script>

<style scoped lang="scss">
.tile-image {
  float: left;
}
.price-title {
  font-size: 40px;
  font-weight: bold;
}
.flex-centered {
  align-items: center;
  justify-content: flex-end;
  display: flex;
}
.tile-overlay-container {
  position: relative;
  &:hover {
    box-shadow: none;
  }
  &:hover > .tile-overlay {
    background-color: rgba(255, 255, 255, 0.9);
  }
  &:hover .tile-overlay-text {
    visibility: visible;
  }
  .tile-overlay {
    position: absolute;
    display: block;
    height: auto;
    bottom: 0;
    width: auto;
    right: 0;
    top: 0;
    left: 0;
    z-index: 2;
    cursor: pointer;
    &-text {
      color: #58529f;
      visibility: hidden;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      font-size: 18px;
      white-space: pre-wrap;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size: 30px;
      font-weight: 700;
      white-space: nowrap;
    }
  }
}
.projects-page {
  padding-top: 60px;
  &-title {
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 20px;
  }
}
</style>
