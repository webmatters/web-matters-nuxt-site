<template>
  <section class="hero is-success ">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-grey">Register</h3>
          <p class="subtitle has-text-grey">Please register to proceed.</p>
          <div class="box">
            <figure class="avatar">
              <img src="~/assets/images/wm-logo.png" />
            </figure>
            <form @submit.prevent="register">
              <!-- Username -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.username"
                    class="input is-large"
                    type="text"
                    placeholder="Username"
                    @blur="$v.form.username.$touch()"
                  />
                  <div v-if="$v.form.username.$error" class="form-error">
                    <span
                      v-if="!$v.form.username.required"
                      class="help is-danger"
                      >Username is required.</span
                    >
                    <span
                      v-if="!$v.form.username.minLength"
                      class="help is-danger"
                      >Username must be at least 6 characters.</span
                    >
                  </div>
                </div>
              </div>
              <!-- Name -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.name"
                    class="input is-large"
                    type="text"
                    placeholder="Name"
                    @blur="$v.form.name.$touch()"
                  />
                  <div v-if="$v.form.name.$error" class="form-error">
                    <span v-if="!$v.form.name.required" class="help is-danger"
                      >Name is required.</span
                    >
                    <span v-if="!$v.form.name.minLength" class="help is-danger"
                      >Name must be at least 6 characters.</span
                    >
                  </div>
                </div>
              </div>
              <!-- Email -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.email"
                    class="input is-large"
                    type="email"
                    placeholder="Your Email"
                    @blur="$v.form.email.$touch()"
                  />
                  <div v-if="$v.form.email.$error" class="form-error">
                    <span v-if="!$v.form.email.required" class="help is-danger"
                      >Email is required.</span
                    >
                    <span
                      v-if="!$v.form.email.emailValidator"
                      class="help is-danger"
                      >Email address is not valid.</span
                    >
                  </div>
                </div>
              </div>
              <!-- Avatar -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.avatar"
                    class="input is-large"
                    type="text"
                    placeholder="Avatar"
                    autocomplete=""
                    @blur="$v.form.avatar.$touch()"
                  />
                  <div v-if="$v.form.avatar.$error" class="form-error">
                    <span v-if="!$v.form.avatar.url" class="help is-danger"
                      >Url format is not valid.</span
                    >
                    <span
                      v-if="!$v.form.avatar.supportedFileType"
                      class="help is-danger"
                      >Selected file type is not valid.</span
                    >
                  </div>
                </div>
              </div>
              <!-- Password -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.password"
                    class="input is-large"
                    type="password"
                    placeholder="Your Password"
                    autocomplete="new-password"
                    @blur="$v.form.password.$touch()"
                  />
                  <div v-if="$v.form.password.$error" class="form-error">
                    <span
                      v-if="!$v.form.password.required"
                      class="help is-danger"
                      >Password is required</span
                    >
                    <span
                      v-if="!$v.form.password.minLength"
                      class="help is-danger"
                      >Password minimum length is 6 letters</span
                    >
                  </div>
                </div>
              </div>
              <!-- Password Confirmation -->
              <div class="field">
                <div class="control">
                  <input
                    v-model="form.passwordConfirmation"
                    class="input is-large"
                    type="password"
                    placeholder="Password Confirmation"
                    autocomplete="off"
                    @blur="$v.form.passwordConfirmation.$touch()"
                  />
                  <div
                    v-if="$v.form.passwordConfirmation.$error"
                    class="form-error"
                  >
                    <span
                      v-if="!$v.form.passwordConfirmation.required"
                      class="help is-danger"
                      >Password is required</span
                    >
                    <span
                      v-if="!$v.form.passwordConfirmation.sameAs"
                      class="help is-danger"
                      >Password confirmation should be the same as
                      password.</span
                    >
                  </div>
                </div>
              </div>
              <!-- Register Button -->
              <button
                :disabled="$v.form.$invalid"
                type="submit"
                class="button is-block is-info is-large is-fullwidth"
                @click.prevent="register"
              >
                Register
              </button>
            </form>
          </div>
          <p class="has-text-grey">
            <nuxt-link to="/login">Login</nuxt-link> &nbsp;·&nbsp;
            <a>Sign Up With Google</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import {
  email,
  minLength,
  required,
  sameAs,
  url
} from 'vuelidate/lib/validators'
import { supportedFileType } from '@/helpers/validators'

export default {
  middleware: 'guest',
  data() {
    return {
      form: {
        username: null,
        name: null,
        email: null,
        avatar: null,
        password: null,
        passwordConfirmation: null
      }
    }
  },
  validations: {
    form: {
      username: {
        minLength: minLength(6),
        required
      },
      name: {
        minLength: minLength(6),
        required
      },
      email: {
        emailValidator: email,
        required
      },
      avatar: {
        url,
        supportedFileType
      },
      password: {
        minLength: minLength(6),
        required
      },
      passwordConfirmation: {
        sameAs: sameAs('password'),
        required
      }
    }
  },
  computed: {
    isFormValid() {
      return !this.$v.form.$invalid
    }
  },
  methods: {
    register() {
      this.$v.form.$touch()
      if (this.isFormValid) {
        this.$store
          .dispatch('auth/register', this.form)
          .then(() => this.$router.push('/login'))
          .catch(() =>
            this.$toasted.error(
              'There was a problem. Please try to register again.',
              {
                duration: 3000
              }
            )
          )
      }
    }
  }
}
</script>

<style scoped>
.hero.is-success {
  background: #f2f6fa;
}
.hero .nav,
.hero.is-success .nav {
  -webkit-box-shadow: none;
  box-shadow: none;
}
.box {
  margin-top: 5rem;
}
.avatar {
  margin-top: -70px;
  padding-bottom: 20px;
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
p.subtitle {
  padding-top: 1rem;
}
</style>
