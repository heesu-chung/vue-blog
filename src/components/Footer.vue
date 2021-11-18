<template>
  <footer>
      <div class="container">
          <div class="left">
              <div class="col-1">
                  <router-link class="header" :to="{ name: 'Home'}">DDD</router-link>
                 
              </div>
              <div class="col-2">
                  <ul>
                      <router-link class="link" :to="{ name: 'Home'}">Home</router-link>
                      <router-link class="link" :to="{ name: 'Blogs'}">Blogs</router-link>
                       <router-link class="link" :to="{name: 'Create Post'}">Create Post</router-link>
                    
                  </ul>
              </div>
          </div>
          <div class="right">
              <p>Copyright 2021 All Rights Reserved</p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
    name: "Footer",
    components: {

    },
    
}
</script>

<style lang="scss" scoped>
*{
  font-color: #eee;
}
footer {
  background-color: #555;
  
  .container {

  }
}
</style>