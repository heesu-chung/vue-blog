<template>
    <router-link :to="{name: 'ViewPost', params: {blogid: this.post.blogID}}" class="container">
        <div class="blog-card">
            <div class="info">
                <div class="info-text">
                    <h6 class="category">CATEGORY</h6>
                    <h3 class="title" >{{post.blogTitle}}</h3>
                    <h5 class="content" v-html="post.blogHTML"></h5>
                    <h6 class="date">{{ new Date(post.blogDate).toLocaleString("ko-KR") }}</h6>
                </div>
            </div>
            
            <img class="thumbnail" :src="post.blogCoverPhoto" alt="">
            
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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap');

*{
    
}
.container {
    display: flex;
    justify-content: center;
    text-decoration: none; // text-decoration: none with link

    .blog-card {
        width: 100%;
        height: 300px;
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        transition: .3s ease all;
        &:hover {
            opacity: 100%;
            box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3), 0 2px 4px -1px rgba(0, 0,0,0.06);
            
        }

        .thumbnail {
            position: absolute;
            opacity: 0%;
            width: 100%;
            object-fit: cover;
            height: 300px;
            transition: .5s all ease;
            &:hover {
                opacity: 30%;
                
            }
        }
        
        .info {
            height: 400px;
            display: flex;
            flex-direction: column;
            height: 100%;
            color: #666;
            
            .info-text{
                padding: 0 25px;
                padding-top: 50px;
                .category {
                    font-size: 10px;
                    font-family:Arial, Helvetica, sans-serif;
                    color: #aaa;
                    font-weight: 300;
                    padding-left: 3px;
                    letter-spacing: 1px;
                }

                .title{
                    width: 100%;
                    padding-bottom: 6px;
                    padding-top: 3px;
                    border-bottom: 3px solid #666;
                    display: inline-flex;
                    font-size: 40px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 800;
                    letter-spacing: 1px;
                    transition: .3s ease all;
                    @media(max-width: 700px) {
                        font-size: 30px;
                    }
                }
                h5{
                    padding-top: 7px;
                    padding-left: 3px;
                    padding-right: 3px;
                    font-family: 'Open Sans', sans-serif;
                    font-weight: 400;
                    font-style: italic;
                    font-size: 13px;
                    overflow: hidden;
                    max-height: 60px;
                    letter-spacing: 1px;
                    word-spacing: 3px;
                }
                .date{
                    font-family:Arial, Helvetica, sans-serif;
                    font-size: 11px;       
                    color: #999;
                    font-weight: 300;
                    float: right;
                    padding-top: 30px;
                    padding-right: 5px;
                }
            }
        }

    }
}
</style>