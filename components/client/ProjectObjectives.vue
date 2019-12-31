<template>
  <div class="card manage-card">
    <header class="card-header card-section">
      <p class="card-header-title">Objectives and Requirements</p>
    </header>
    <div class="card-content card-section">
      <form>
        <multi-line-text-input
          label="Project Objectives"
          :lines="project.wsl"
          @addClicked="addLine('wsl')"
          @removeClicked="removeLine($event, 'wsl')"
          @valueUpdated="updateLine($event, 'wsl')"
        />
        <multi-line-text-input
          label="Business Requirements"
          :lines="project.requirements"
          @addClicked="addLine('requirements')"
          @removeClicked="removeLine($event, 'requirements')"
          @valueUpdated="updateLine($event, 'requirements')"
        />
      </form>
    </div>
  </div>
</template>

<script>
import MultiLineTextInput from '@/components/form/MultiLineTextInput.vue'

export default {
  components: {
    MultiLineTextInput
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    addLine(field) {
      this.$store.commit('client/project/addLine', field)
    },
    removeLine(index, field) {
      this.$store.commit('client/project/removeLine', { field, index })
    },
    updateLine({ value, index }, field) {
      this.$store.dispatch('client/project/updateLine', { field, value, index })
    }
  }
}
</script>

<style lang="scss" scoped></style>
