<template>
  <div class="project-create-wrapper">
    <div class="project-create-headerText">
      Please choose a title for your project.
    </div>
    <h2 class="project-create-subtitle">
      You will be able to change title later.
    </h2>
    <form class="project-create-form" @input="emitFormData">
      <div class="project-create-form-group">
        <div class="field project-create-form-field control has-icons-right">
          <text-input-with-count
            v-model="form.title"
            :v="$v.form.title"
            :max-length="50"
          />
          <div v-if="$v.form.title.$error" class="form-error">
            <span v-if="!$v.form.title.required" class="help is-danger"
              >Title is required</span
            >
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import TextInputWithCount from '@/components/form/TextInputWithCount.vue'

export default {
  components: {
    TextInputWithCount
  },
  data() {
    return {
      form: {
        title: ''
      }
    }
  },
  validations: {
    form: {
      title: {
        required
      }
    }
  },
  computed: {
    isValid() {
      return !this.$v.$invalid
    }
  },
  methods: {
    emitFormData() {
      this.$emit('stepUpdated', { data: this.form, isValid: this.isValid })
    }
  }
}
</script>

<style lang="scss" scoped></style>
