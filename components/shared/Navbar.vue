<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        <div class="brand-title is-size-2">
          <span class="has-text-info">Web</span
          ><span class="has-text-primary">Matters</span>
        </div>
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="() => {}"
      >
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item has-dropdown is-hoverable">
          <nuxt-link to="/services/overview" class="navbar-link">
            Services
          </nuxt-link>
          <div class="navbar-dropdown">
            <nuxt-link to="/services/overview" class="navbar-item"
              >Overview</nuxt-link
            >
            <nuxt-link to="/services/appDevelopment" class="navbar-item"
              >App Development</nuxt-link
            >
            <nuxt-link to="/services/uxDesign" class="navbar-item"
              >UX Design</nuxt-link
            >
            <nuxt-link to="/services/dataAnalysis" class="navbar-item"
              >Data Analysis</nuxt-link
            >
            <nuxt-link to="/services/productStrategy" class="navbar-item"
              >Product Strategy</nuxt-link
            >
            <nuxt-link to="/services/marketing" class="navbar-item"
              >Marketing</nuxt-link
            >
            <nuxt-link to="/services/managedHosting" class="navbar-item"
              >Managed Hosting</nuxt-link
            >
          </div>
        </div>
        <nuxt-link to="#" class="navbar-item">
          Blog
        </nuxt-link>
        <nuxt-link to="/about" class="navbar-item">
          About
        </nuxt-link>
        <nuxt-link to="/contact" class="navbar-item">
          Contact
        </nuxt-link>
        <div class="navbar-item">
          <div class="buttons">
            <!-- If Authenticated -->
            <template v-if="isAuth">
              <figure class="image avatar is-48x48 m-r-sm">
                <img :src="user.avatar" class="is-rounded" />
              </figure>
              <div class="m-r-sm m-b-sm">Welcome {{ user.name }}!</div>
              <!-- If Admin -->
              <button
                v-if="isAdmin"
                class="button is-link is-outlined"
                @click="() => $router.push('/client/projects')"
              >
                Client
              </button>
              <a class="button is-primary" @click="logout">
                Log out
              </a>
            </template>
            <template v-else>
              <nuxt-link to="/contact" class="button is-rounded nav-button">
                Get a Proposal
              </nuxt-link>
              <!-- <nuxt-link to="/register" class="button is-primary">
                Sign up
              </nuxt-link>
              <nuxt-link to="/login" class="button is-light">
                Log in
              </nuxt-link> -->
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/authUser',
      isAuth: 'auth/isAuthenticated',
      isAdmin: 'auth/isAdmin'
    })
  },
  methods: {
    logout() {
      this.$store
        .dispatch('auth/logout')
        .then(() => this.$router.push('/login'))
        .catch(() =>
          this.$toasted.error('Logout failed.', {
            duration: 3000
          })
        )
    }
  }
}
</script>

<style lang="scss" scoped>
.brand-title {
  font-size: 35px;
  font-weight: bold;
}
.navbar-brand {
  padding-right: 30px;
}
.avatar {
  margin-right: 5px;
}

.nav-button {
  margin-left: 10px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(90deg, #9561e2, #a779e9);
  color: #fff;
  font-weight: bold;
}
</style>
