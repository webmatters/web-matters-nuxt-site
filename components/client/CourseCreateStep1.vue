<template>
  <div class="project-create-wrapper">
    <div class="project-create-headerText">
      Please choose a title for your project.
    </div>
    <h2 class="project-create-subtitle">
      You will be able to change title later.
    </h2>
    <form class="project-create-form">
      <div class="project-create-form-group">
        <div class="field project-create-form-field control has-icons-right">
          <input
            v-model="form.title"
            :maxLength="50"
            type="text"
            placeholder="Add project title here..."
            class="input is-large"
            @input="emitFormData"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'

export default {
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
