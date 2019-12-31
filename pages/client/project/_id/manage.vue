<template>
  <div class="manage-page">
    <ClientHeader title="Project Name" exit-link="/client/projects">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            class="button is-primary is-inverted is-medium is-outlined"
            type="button"
            :disabled="!canUpdateProject"
            @click="updateProject"
          >
            Save
          </button>
        </div>
      </template>
    </ClientHeader>
    <div class="project-manage">
      <div class="container">
        <div class="columns">
          <div class="column is-3 p-lg">
            <!-- <aside class="menu is-hidden-mobile"> -->
            <aside class="menu">
              <p class="menu-label">
                Edit Project
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display TargetStudents -->
                  <a
                    :class="activeComponentClass(1)"
                    @click.prevent="displayStep(1)"
                    >Objectives
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a
                    :class="activeComponentClass(2)"
                    @click.prevent="displayStep(2)"
                  >
                    Details
                  </a>
                </li>
              </ul>
              <p class="menu-label">
                Manage Project
              </p>
              <ul class="menu-list">
                <li>
                  <!-- display Price -->
                  <a
                    :class="activeComponentClass(3)"
                    @click.prevent="displayStep(3)"
                  >
                    Links
                  </a>
                </li>
                <li>
                  <!-- display Status -->
                  <a
                    :class="activeComponentClass(4)"
                    @click.prevent="displayStep(4)"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div class="column">
            <keep-alive>
              <component
                :is="activeComponent"
                :project="project"
                @projectValueUpdated="handleProjectUpdate"
              />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import ClientHeader from '~/components/shared/ClientHeader'
import TargetStudents from '@/components/client/TargetStudents.vue'
import LandingPage from '@/components/client/LandingPage.vue'
import Price from '@/components/client/Price.vue'
import Status from '@/components/client/Status.vue'
import MultiComponentMixin from '@/mixins/MultiComponentMixin'

export default {
  layout: 'client',
  components: { ClientHeader, TargetStudents, LandingPage, Price, Status },
  mixins: [MultiComponentMixin],
  async fetch({ store, params }) {
    await store.dispatch('client/project/fetchProjectById', params.id)
    await store.dispatch('category/fetchCategories')
  },
  data() {
    return {
      steps: ['TargetStudents', 'LandingPage', 'Price', 'Status']
    }
  },
  computed: {
    ...mapState({
      project: ({ client }) => client.project.item,
      canUpdateProject: ({ client }) => client.project.canUpdateProject
    })
  },
  methods: {
    handleProjectUpdate({ value, field }) {
      this.$store.dispatch('client/project/updateProjectValue', {
        field,
        value
      })
    },
    updateProject() {
      this.$store
        .dispatch('client/project/updateProject')
        .then(() =>
          this.$toasted.success('Project data was successfully updated.', {
            duration: 3000
          })
        )
        .catch(() =>
          this.$toasted.error('There was a problem. Please try again.', {
            duration: 3000
          })
        )
    }
  }
}
</script>

<style lang="scss">
.manage-page {
  .label-info {
    font-size: 13px;
    color: gray;
    font-style: italic;
  }
  .project-manage {
    padding-top: 40px;
    .menu {
      padding-top: 30px;
      &-label {
        font-size: 20px;
        color: black;
      }
      &-list {
        > li {
          font-size: 18px;
          margin-top: 10px;
          > a {
            &.is-active {
              background-color: transparent;
              color: inherit;
              border-left: 3px solid #58529f;
            }
          }
        }
      }
    }
    .card {
      &-section {
        padding: 40px;
      }
      &-header {
        &-title {
          padding: 0;
          color: #8f99a3;
          font-weight: 400;
          font-size: 25px;
        }
      }
    }
  }
}
</style>
