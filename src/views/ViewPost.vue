<template>
  <div class="post-view">

      <div class="container">
        <img :src="this.currentBlog[0].blogCoverPhoto" alt=""/>
          <h3> category </h3>
          <h2>{{this.currentBlog[0].blogTitle}}</h2>
          <h4 class="date">{{new Date(this.currentBlog[0].blogDate).toLocaleString("en-us", {dateStyle: "long"})}}</h4>

          
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
            date: null,
        };
    },
      async mounted() {
      this.currentBlog = await this.$store.state.blogPosts.filter(post => {
      return post.blogID === this.$route.params.blogid;
    });
  },
  computed: {
  },
}
</script>

<style lang="scss" scoped>
*{
}
.post-view {
  background-color: #fbf6f2;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 120px;


  .container {
    
    width: 800px;
    padding-bottom: 150px;
    
    @media(max-width: 800px) {
      width: 90%;
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;     
      opacity: 40%;
      @media(max-width: 700px) {
        
      }
      
    }

    h3 {
      position: absolute;
      color: #aaa;
      font-size: 12px;
      padding-left: 5px;
    }
    h2 {
      font-size: 3rem;
      padding-top: 10px;
      
    }
    h4 {
      
      text-align: right;
      color: #888;
      font-size: 12px;
      padding-right: 15px;
      padding-bottom: 10px; 
      border-bottom: 2px solid #aaa;
    }
    
    }
    .post-content {
      padding: 20px 0;
      text-indent: 1em;
      font-size: 16px;
      font-weight: 400;
      word-spacing: 1px;
    }
  }

</style>