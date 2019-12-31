<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Project Details</p>
    </header>
    <div class="card-content card-section">
      <form>
        <div class="field">
          <label class="label">Project Title</label>
          <div class="control">
            <input
              :value="project.title"
              class="input is-medium"
              type="text"
              placeholder="Add project title "
              @input="$event => emitProjectValue($event, 'title')"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project Subtitle</label>
          <div class="control">
            <input
              :value="project.subtitle"
              class="input is-medium"
              type="text"
              placeholder="Add project subtitle"
              @input="$event => emitProjectValue($event, 'subtitle')"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Project Description</label>
          <div class="control">
            <textarea
              :value="project.description"
              class="textarea is-medium"
              type="text"
              placeholder="Describe the project in more detail."
              @input="$event => emitProjectValue($event, 'description')"
            >
            </textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Category</label>
          <div class="select is-medium">
            <select
              :value="project.category._id"
              @change="$event => emitProjectValue($event, 'category')"
            >
              <option
                v-for="category in categories"
                :key="category._id"
                :value="category._id"
                >{{ category.name }}</option
              >
            </select>
          </div>
        </div>
        <div class="field">
          <label class="label">Client Logo</label>
          <div class="columns">
            <div class="column">
              <figure class="image is-4by2">
                <img :src="project.image" />
              </figure>
            </div>
            <div class="column centered">
              <div class="control">
                <input
                  :value="project.image"
                  class="input is-medium"
                  type="text"
                  placeholder="Provide URL to logo."
                  @input="$event => emitProjectValue($event, 'image')"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Client Website</label>
          <div class="control">
            <input
              :value="project.projectLink"
              class="input is-medium"
              type="text"
              placeholder="Provide URL to website."
              @input="$event => emitProjectValue($event, 'projectLink')"
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Client Contact</label>
          <div class="control">
            <input
              :value="project.promoVideoLink"
              class="input is-medium"
              type="text"
              placeholder="Contact Name - Email"
              @input="$event => emitProjectValue($event, 'promoVideoLink')"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    categories() {
      return this.$store.state.category.items
    }
  },
  methods: {
    emitProjectValue(e, field) {
      const value = e.target.value

      if (field === 'category') {
        return this.emitCategory(value)
      }
      return this.$emit('projectValueUpdated', { value, field })
    },
    emitCategory(categoryId) {
      const foundCategory = this.categories.find(
        category => category._id === categoryId
      )
      this.$emit('projectValueUpdated', {
        value: foundCategory,
        field: 'category'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
