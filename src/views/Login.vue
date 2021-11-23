<template>
  <div class="form-wrap">
      <form action="" class="login">
          <p class="login-register">
              Don't have an account?
              <router-link class="router-link" :to="{name: 'Register'}">Register</router-link>
          </p>
          <h2>Login to FireBlogs</h2>
          <div class="inputs">
              <div class="input">
                  <input type="text" placeholder="Email" v-model="email">
              </div>
              <div class="input">
                  <input type="text" placeholder="Password" v-model="password" />
              </div>

              <div class="error" v-show="error">
                  {{this.errorMsg }}
              </div>
          </div>
          <button @click.prevent="signIn">Sign In</button>
          <div class="angle"></div>
      </form>
      <div class="background"></div>
  </div>
</template>

<script>
export default {
    name: 'Login',

}
</script>

<style>

</style>