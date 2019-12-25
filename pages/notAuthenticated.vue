<template>
  <div class="container">
    <ErrorView
      :title="'Please log in to view this page.'"
      :status="'401'"
      :navigateToPage="'login'"
      :navigateToText="'Navigate to Login Page'"
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
