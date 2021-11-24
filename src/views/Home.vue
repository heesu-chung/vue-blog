<template>
    <div class="blog-card-wrap">
      <div class="blog-cards container">
          <BlogCard :post="post" v-for="(post, index) in blogPosts" :key="index"/>
          
      </div>
  </div>
</template>

<script>
import BlogCard from '../components/BlogCard.vue';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
    name: 'Home',
    components: {
        BlogCard,
    },
        created() {
      
            this.$store.dispatch("getPost");
                    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);
      console.log(`onauth`);
    });
    },
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts;
        }
    },
    data() {
        return {
            
        };
    },
}
</script>

<style lang="scss" scoped>


.blog-card-wrap {
  background-color: #fbf6f2;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: 50px 24px;
  
  @media (min-width: 500px) {
    padding: 30px 24px;
    
  }

  .blog-cards {
    display: grid;
    gap: 16px;
    row-gap: 30px;
    grid-template-columns: 1fr;

    @media (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>