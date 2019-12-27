<template>
  <div class="about-page">
    <div class="container">
      <figure class="avatar">
        <img src="~/assets/images/wm-logo.png" />
      </figure>
      <p>
        Web Matters is a premier web consulting firm providing cutting-edge web
        development and marketing services.
      </p>
      <br />
      <p>
        Everything we do is based around helping you achieve your objectives
        whether that's to grow your revenue with an improved web presence or to
        bring your idea to life as web or mobile app.
      </p>
      <br />
      <p>
        We are professionals with decades of business, development, and design
        experience who have worked with and for web consulting firms. We
        understand the importance of starting the project by first fully
        understanding your needs. We use the Pragmatic Marketing framework to
        help you shape or enhance your digital strategy. Then we apply the most
        efficient and performant web development tools and processes to deliver
        the highest quality applications that are reliable and that scale. We
        primarily use the most modern JavaScript frameworks, the language upon
        which the Web was built. We follow an Agile development process
        utilizing what we've coined as the VENM stack. That's Vue.js,
        Express.js, Node.js, and MongoDB. We follow a continuous integration and
        continuous deployment process, providing you access and visibility every
        step of the way. We are one of the only web development firms with a
        fully integrated client portal, allowing you to see progress reports,
        communicate with your project manager, upload copy & assets, and access
        your app in its current state of development. Give us a call today to
        learn more about the Web Matters difference.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title:
      'Learn more about the Web Matters difference and we we can do for you.'
  }
}
</script>
<style scoped lang="scss">
.about-page {
  padding-top: 80px;
  position: relative;
  max-width: 800px;
  margin: 0 auto 5rem auto;
  font-size: 25px;
}
.avatar {
  margin-right: 20px;
  float: left;
}
.avatar img {
  height: 128px;
  width: 128px;
  padding: 5px;
  background: #fff;
  border-radius: 50%;
  -webkit-box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.1);
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}
</style>
