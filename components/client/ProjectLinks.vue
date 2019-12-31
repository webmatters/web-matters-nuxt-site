<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Important Links</p>
    </header>
    <div class="card-content card-section">
      <div class="field">
        <label class="label">Kanban Board</label>
        <div class="control">
          <input
            :value="project.kanbanLink"
            class="input is-medium"
            type="text"
            placeholder="Link to Kanban Board"
            @input="$event => emitProjectValue($event, 'kanbanLink')"
          />
        </div>
      </div>
      <div class="field">
        <label class="label">Project Files</label>
        <div class="control">
          <input
            :value="project.fileLink"
            class="input is-medium"
            type="text"
            placeholder="Link to file"
            @input="$event => emitProjectValue($event, 'fileLink')"
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
