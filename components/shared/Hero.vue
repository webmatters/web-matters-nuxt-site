<template>
  <section class="hero is-black is-medium">
    <div class="hero-body">
      <div
        :style="{
          background: `linear-gradient(90deg, hsl(204, 86%, 53%) 0%, hsl(171, 100%, 41%) 100%)`
        }"
        class="hero-img"
      ></div>
      <div class="container">
        <h1 class="title">Progressive Web Services</h1>
        <h2 class="subtitle">For Intelligent Business Owners</h2>

        <vue-typed-js
          :strings="[
            'Web Development',
            'Mobile Development',
            'UX Design',
            'Marketing',
            'Strategy',
            'Managed Hosting'
          ]"
          :loop="true"
          class="has-text-weight-semibold is-size-5"
        >
          <h3 class="typing"></h3>
        </vue-typed-js>
        <div class=" is-inline-block p-t-lg">
          <nuxt-link
            to="/services/overview"
            class="button is-rounded hero-button"
            >Learn More</nuxt-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.hero-body {
  position: relative;
  height: 500px;
}
.hero-img {
  opacity: 0.8;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.hero-button {
  background-image: linear-gradient(90deg, #1caecd, #1ccdaa);
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 300ms ease, transform 300ms ease,
    -webkit-transform 300ms ease;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}

.user-avatar {
  display: inline-block;
}
.is-black {
  background-color: black;
}
.title {
  font-weight: bold;
  font-size: 45px;
}
.subtitle {
  font-size: 25px;
}
.author-name {
  font-size: 20px;
  font-weight: bold;
}
</style>
