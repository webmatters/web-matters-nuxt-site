<template>
  <div>
    <!-- Send a label through props -->
    <label class="label">{{ label }}</label>
    <!-- Iterate lines here -->
    <!-- TODO: change key of this div -->
    <!-- Generate key when receiving props here -->
    <div
      v-for="(line, index) in lines"
      :key="line.index"
      class="multi-field field"
    >
      <div class="control multi-control">
        <div class="multi-input-container">
          <input
            :value="line.value"
            class="input is-medium multi-input"
            type="text"
            placeholder="Add Something Nice"
            @input="emitUpdate($event, index)"
          />
        </div>
        <div class="btn-container">
          <!-- Delete the line -->
          <button
            type="button"
            class="button is-danger multi-button"
            @click.prevent="emitRemove(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    <!-- Add the Line -->
    <button
      type="button"
      class="m-b-sm button is-medium is-link is-outlined"
      @click="emitAdd"
    >
      Add a Line
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    lines: {
      type: Array,
      required: true
    }
  },
  computed: {
    lastLine() {
      return this.lines[this.lines.length - 1]
    },
    hasLines() {
      return this.lines.length > 0
    },
    hasLastLineValue() {
      return this.lastLine && this.lastLine.value !== ''
    },
    canDeleteLine() {
      return this.lines.length > 1
    },
    canAddLine() {
      return this.hasLines && this.hasLastLineValue
    }
  },
  methods: {
    emitAdd() {
      if (this.canAddLine || this.lines.length === 0) {
        this.$emit('addClicked')
      }
    },
    emitRemove(index) {
      this.canDeleteLine && this.$emit('removeClicked', index)
    },
    emitUpdate(event, index) {
      const { value } = event.target
      this.$emit('valueUpdated', { value, index })
    }
  }
}
</script>

<style scoped lang="scss">
.multi-input {
  float: left;
  width: 100%;
}
.multi-button {
  height: inherit;
}
.multi-input-container {
  display: flex;
  flex: 1;
}
.btn-container {
  display: flex;
  opacity: 0;
}
.multi-control {
  display: flex;
  &:hover > .btn-container {
    opacity: 1;
  }
}
</style>
