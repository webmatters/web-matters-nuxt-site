<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Pricing</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Price of the project</label>
        <div class="control">
          <input
            :value="project.price"
            class="input is-medium"
            type="text"
            placeholder="179.99"
            @input="$event => emitProjectValue($event, 'price')"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Discounted Price for the project</label>
        <div class="control">
          <input
            :value="project.discountedPrice"
            class="input is-medium"
            type="text"
            placeholder="9.99"
            @input="$event => emitProjectValue($event, 'discountedPrice')"
          />
        </div>
      </div>
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
  methods: {
    emitProjectValue(e, field) {
      this.$emit('projectValueUpdated', { value: e.target.value, field })
    }
  }
}
</script>

<style lang="scss" scoped></style>
