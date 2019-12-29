<template>
  <div class="manage-page">
    <ClientHeader title="Project Name" exit-link="/client/projects">
      <template #actionMenu>
        <div class="full-page-takeover-header-button">
          <button
            class="button is-primary is-inverted is-medium is-outlined"
            @click="() => {}"
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
                    >Target Your Students
                  </a>
                </li>
                <li>
                  <!-- display LandingPage -->
                  <a
                    :class="activeComponentClass(2)"
                    @click.prevent="displayStep(2)"
                  >
                    Project Landing Page
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
                    Price
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
              <component :is="activeComponent" />
            </keep-alive>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientHeader from '~/components/shared/ClientHeader'
import TargetStudents from '@/components/client/TargetStudents.vue'
import LandingPage from '@/components/client/LandingPage.vue'
import Price from '@/components/client/Price.vue'
import Status from '@/components/client/Status.vue'

export default {
  layout: 'client',
  components: { ClientHeader, TargetStudents, LandingPage, Price, Status },
  data() {
    return {
      steps: ['TargetStudents', 'LandingPage', 'Price', 'Status'],
      activeStep: 1
    }
  },
  computed: {
    activeComponent() {
      return this.steps[this.activeStep - 1]
    }
  },
  methods: {
    displayStep(step) {
      this.activeStep = step
    },
    activeComponentClass(step) {
      return this.activeStep === step ? 'is-active' : ''
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