<template>
  <div class="project-create-wrapper">
    <div class="project-create-headerText">
      What type of project is this?
    </div>
    <h2 class="project-create-subtitle">
      The project category can be changed later. later.
    </h2>
    <form class="project-create-form">
      <div class="project-create-form-group">
        <div class="project-create-form-field">
          <div class="select is-large">
            <select
              v-model="form.category"
              @change="emitFormData"
              @blur="$v.form.category.$touch()"
            >
              <option value="default">Select Category</option>
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
              >
                {{ category.name }}
              </option>
            </select>
            <div v-if="$v.form.category.$dirty && !isValid" class="form-error">
              <span class="help is-danger">Category is required</span>
            </div>
          </div>
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
        category: 'default'
      }
    }
  },
  validations: {
    form: {
      category: {
        required
      }
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items
    },
    isValid() {
      return !this.$v.$invalid && this.form.category !== 'default'
    }
  },
  methods: {
    emitFormData() {
      this.$v.form.$touch()
      this.$emit('stepUpdated', { data: this.form, isValid: this.isValid })
    }
  }
}
</script>

<style lang="scss" scoped>
.help.is-danger {
  text-align: left;
}
</style>
