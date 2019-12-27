<template>
  <div class="project-create-wrapper">
    <div class="project-create-headerText">
      Please choose a title for your project.
    </div>
    <h2 class="project-create-subtitle">
      You will be able to change title later.
    </h2>
    <form @input="emitFormData" class="project-create-form">
      <div class="project-create-form-group">
        <div class="field project-create-form-field control has-icons-right">
          <input
            :maxLength="50"
            type="text"
            placeholder="Add project title here..."
            class="input is-large"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
