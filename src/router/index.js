import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import CreatePost from '../views/CreatePost.vue';
import ViewPost from '../views/ViewPost.vue';
import About from '../views/About.vue';
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component : Home,
    },
    {
        path: "/create-post",
        name: "CreatePost",
        component : CreatePost,
    },
    {
        path: "/view-post/:blogid",
        name: "ViewPost",
        component : ViewPost,
    },
    {
        path: "/about",
        name: "About",
        component : About,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;