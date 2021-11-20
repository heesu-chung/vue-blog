<template>
  <div class="post-view">
      <div class="container">
          <h2>{{this.currentBlog[0].title}}</h2>
          <h4>posted on: {{new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", {dateStyle: "long"})}}</h4>
          <img :src="this.currentBlog[0].blogCoverPhoto" alt=""/>
                  <div class="post-content ql-editor" v-html="this.currentBlog[0].blogHTML"></div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ViewPost',
    data() {
        return {
            currentBlog: null,
        };
    },
      async mounted() {
      this.currentBlog = await this.$store.state.blogPosts.filter(post => {
      return post.blogID === this.$route.params.blogid;
    });
  },
}
</script>

<style>

</style>