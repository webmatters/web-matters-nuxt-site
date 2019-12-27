<template>
  <div class="client-page">
    <client-header title="" exit-link="/" />
    <div class="centered">
      <div class="columns">
        <!-- Go to /client/projects -->
        <div @click="() => $router.push('/client/projects')" class="box">
          <div>
            Projects
          </div>
        </div>
        <!-- Go to /client/blogs -->
        <div @click="() => {}" class="box">
          <div>
            Blogs
          </div>
        </div>
        <!-- Go to /client/heroes -->
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
import ClientHeader from '@/components/shared/ClientHeader.vue'

export default {
  layout: 'client',
  components: {
    ClientHeader
  }
}
</script>

<style scoped lang="scss">
.client-page {
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
