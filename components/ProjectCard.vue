<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by2">
        <img :src="project.image" :alt="project.title" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ project.title | shortenText(45) }}</p>
          <p class="subtitle is-6">
            <i>{{ project.author.name }}</i>
          </p>
        </div>
      </div>
      <div class="content">
        {{ project.subtitle | shortenText(45) }}
        <br />
      </div>
      <div class="price-box">
        <span class="price">${{ project.price }}</span>
        <span class="disc-price">${{ project.discountedPrice }}</span>
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="''" class="card-footer-item">Learn More</nuxt-link>
      <a :href="project.projectLink" target="_" class="card-footer-item"
        >Enroll</a
      >
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.card-image:hover {
  cursor: pointer;
  opacity: 0.9;
}
.price-box {
  text-align: right;
  .price {
    color: gray;
    font-size: 16px;
    text-decoration: line-through;
  }
  .disc-price {
    font-size: 21px;
    font-weight: bold;
  }
}
</style>
