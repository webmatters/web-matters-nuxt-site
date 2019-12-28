<template>
  <div class="full-page-takeover-window">
    <div class="full-page-takeover-page">
      <client-header
        :title="`Step ${activeStep} of ${stepsLength}`"
        exit-link="/client/projects"
      />
      <div class="full-page-takeover-header-bottom-progress">
        <div
          :style="{ width: `${progress}` }"
          class="full-page-takeover-header-bottom-progress-highlight"
        ></div>
      </div>
      <div class="project-create full-page-takeover-container">
        <div class="container">
          <keep-alive>
            <component
              :is="activeComponent"
              ref="activeComponent"
              @stepUpdated="mergeFormData"
            />
          </keep-alive>
        </div>
        <div class="full-page-footer-row">
          <div class="container">
            <div class="full-page-footer-col">
              <div v-if="!isFirstStep">
                <a class="button is-large" @click.prevent="previousStep"
                  >Previous</a
                >
              </div>
              <div v-else class="empty-container"></div>
            </div>
            <div class="full-page-footer-col">
              <div>
                <button
                  v-if="!isLastStep"
                  class="button is-large float-right"
                  :disabled="!canProceed"
                  @click.prevent="nextStep"
                >
                  Continue
                </button>
                <button
                  v-else
                  :disabled="!canProceed"
                  class="button is-success is-large float-right"
                  @click="createProject"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClientHeader from '~/components/shared/ClientHeader'
import CourseCreateStep1 from '~/components/client/CourseCreateStep1'
import CourseCreateStep2 from '~/components/client/CourseCreateStep2'

export default {
  layout: 'client',
  components: { ClientHeader, CourseCreateStep1, CourseCreateStep2 },
  fetch({ store }) {
    return store.dispatch('category/fetchCategories')
  },
  data() {
    return {
      activeStep: 1,
      steps: ['CourseCreateStep1', 'CourseCreateStep2'],
      canProceed: false,
      form: {
        title: '',
        category: ''
      }
    }
  },
  computed: {
    stepsLength() {
      return this.steps.length
    },
    isLastStep() {
      return this.activeStep === this.stepsLength
    },
    isFirstStep() {
      return this.activeStep === 1
    },
    progress() {
      return `${(100 / this.stepsLength) * this.activeStep}%`
    },
    activeComponent() {
      return this.steps[this.activeStep - 1]
    }
  },
  methods: {
    nextStep() {
      this.activeStep++
      this.$nextTick(
        () => (this.canProceed = this.$refs.activeComponent.isValid)
      )
    },
    previousStep() {
      this.activeStep--
      this.canProceed = true
    },

    mergeFormData({ data, isValid }) {
      this.form = { ...this.form, ...data }
      this.canProceed = isValid
    },
    createProject() {
      this.$store
        .dispatch('client/project/createProject', this.form)
        .then(() => this.$router.push('/client/projects'))
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
.float-right {
  float: right;
}
.empty-container {
  width: 1px;
  height: 1px;
}
.project-create {
  &-wrapper {
    margin-top: 60px;
    text-align: center;
  }
  &-headerText {
    font-weight: 500;
    line-height: 1.1;
    margin-top: 21px;
    margin-bottom: 10.5px;
    font-size: 36px;
    font-weight: 300;
  }
  &-subtitle {
    font-size: 24px;
    font-weight: 300;
    margin-top: 21px;
    margin-bottom: 10.5px;
  }
  &-form {
    margin-top: 60px;
    &-group {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &-field {
      min-width: 552px;
    }
    .select {
      width: 100%;
      > select {
        width: 100%;
      }
    }
  }
}
</style>
