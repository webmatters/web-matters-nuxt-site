<template>
  <div class="container">
    <ErrorView
      :title="
        'You are not authorized to view this page. Please speak with your administrator to get access rights.'
      "
      :status="'401'"
      :navigate-to-page="'/'"
      :navigate-to-text="'Navigate to Home Page'"
    />
  </div>
</template>

<script>
import ErrorView from '@/components/shared/ErrorView'
export default {
  components: {
    ErrorView
  }
}
</script>

<style scoped></style>
