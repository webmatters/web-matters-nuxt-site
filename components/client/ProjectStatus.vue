<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Status</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Status</label>
        <div class="select is-medium">
          <select
            :value="project.status"
            @change="$event => emitProjectValue($event, 'status')"
          >
            <option value="default">Change Status</option>
            <option value="active">
              Active
            </option>
            <option value="inactive">
              Inactive
            </option>
            <option value="complete">
              Complete
            </option>
            <option value="canceled">
              Canceled
            </option>
          </select>
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
