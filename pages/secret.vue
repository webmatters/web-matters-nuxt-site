<template>
  <div>
    <h1>I am secret page for authenticated users only.</h1>
    <h2>I am super secret page</h2>
    <h2>I am super secret page</h2>
    <h2>I am super secret page</h2>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>

<style lang="scss" scoped></style>
