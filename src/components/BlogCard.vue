<template>
    <router-link :to="{name: 'ViewPost', params: {blogid: this.post.blogID}}" class="container">
        <div class="blog-card">
            <img class="thumbnail" :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="">
            <div class="info">
                <div class="info-text">
                    <h3 class="title">Title : {{post.blogTitle}}</h3>
                    <h6>Posted on: {{ new Date(post.blogDate).toLocaleString("en-us", { dateStyle: "long"}) }}</h6>
          
                    <router-link class="link" :to="{name: 'ViewPost', params: {blogid: this.post.blogID}}">
                         View The Post <Arrow class="arrow" />
                   </router-link>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'BlogCard',
    props: ["post"],
    components: {
        
    }, 
}
</script>

<style lang="scss" scoped>
*{
    
}
.container {
    display: flex;
    justify-content: center;
.blog-card {
    width: 90%;
    height: 100%;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    transition: .3s ease all;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0,0,0.06);
    background-color: #fff;
    &:hover {
        opacity: 50%;
    }

    .thumbnail {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        object-fit: cover;
        width: 100%;
        height: 70%;
        background-color: #fff; 
    }
    
    .info {
        .info-text{
            
            h3{
                padding: 10px 10px;
                font-family:Arial, Helvetica, sans-serif;
                
            }
            h6{
                padding: 10px 10px;
                font-family:Arial, Helvetica, sans-serif;
                color: #999;
                font-weight: 300;
            }
        }
    }
}
}
</style>