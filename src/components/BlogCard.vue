<template>
    <router-link to="#" class="container">
        <div class="blog-card">
            <img class="thumbnail" :src="require(`../assets/blogCards/${post.blogCoverPhoto}.jpg`)" alt="">
            <div class="info">
                <div class="info-text">
                    <h3 class="title">Title : {{post.blogTitle}}</h3>
                    <h6 class="date">Posted on : {{post.blogDate}}</h6>
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
    height: 400px;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    transition: .3s ease all;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0, 0,0,0.06);
    &:hover {
        
    }

    .thumbnail {
        border-top-left-radius: 16px;
        border-top-right-radius: 16px;
        object-fit: cover;
        width: 100%;
        height: 50%;
        background-color: gray; 
    }
    
    .info {
        
        .info-text{
            
            h3{
                font-family:Arial, Helvetica, sans-serif;
                text-decoration: none;
                color: black;
            }
            h6{
                font-family:Arial, Helvetica, sans-serif;
                text-decoration: none;
                color: #999;
            }
        }
    }
}
}
</style>