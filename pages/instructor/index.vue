<template>
  <div class="instructor-page">
    <div class="centered">
      <div class="columns">
        <!-- Go to /instructor/courses -->
        <div @click="() => {}" class="box">
          <div>
            Courses
          </div>
        </div>
        <!-- Go to /instructor/blogs -->
        <div @click="() => {}" class="box">
          <div>
            Blogs
          </div>
        </div>
        <!-- Go to /instructor/heroes -->
        <div @click="() => {}" class="box">
          <div>
            Heroes
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: 'admin'
}
</script>

<style scoped lang="scss">
.instructor-page {
  .centered {
    margin-top: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
.box {
  height: 300px;
  width: 300px;
  display: flex;
  margin: 5px;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: #58529f;
    color: white;
    transition: background-color 0.3s ease-out;
  }
  > div {
    align-self: center;
    font-size: 50px;
    font-weight: bold;
  }
}
</style>
