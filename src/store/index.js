import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        blogPostsSample: [
            { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021" },
            { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 2, 2021" },
            { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 3, 2021" },
            { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 4, 2021" },
            { blogTitle: "Blog Card #5", blogCoverPhoto: "stock-1", blogDate: "May 4, 2021" },
            { blogTitle: "Blog Card #6", blogCoverPhoto: "stock-2", blogDate: "May 4, 2021" },
            { blogTitle: "Blog Card #7", blogCoverPhoto: "stock-3", blogDate: "May 4, 2021" },
            { blogTitle: "Blog Card #8", blogCoverPhoto: "stock-4", blogDate: "May 4, 2021" },
          ],

        blogPosts: [],

    },
    getters: {

    },
    mutations: {

    },
    actions: {
        
    },
    modules: {
        
    },
})