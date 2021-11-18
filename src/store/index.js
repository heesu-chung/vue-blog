import Vue from 'vue'
import Vuex from 'vuex'

//import firebase from "firebase/app";
//import "firebase/auth";
import db from "../firebase/firebaseInit";

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
          editPost: null,
          user: null,
          profileEmail: null,
          profileFirstName: null,
          profileLastName: null,
          profileUsername: null,
          profileId: null,
          profileInitials: null,
      
          blogHTML: "Write your blog title here...",
          blogTitle: "",
          blogPhotoName: "",
          blogPhotoFileURL: null,
          blogPhotoPreview: null,
          
          blogPosts: [],
          postLoaded: null,

    },
    getters: {

    },
    mutations: {
        setBlogState(state,payload) {
            state.blogTitle = payload.blogTitle;
            state.blogHTML = payload.blogHTML;
            state.blogPhotoFileURL = payload.blogCoverPhoto;
            state.blogPhotoName = payload.blogCoverPhotoName;
          },
      
          newBlogPost(state, payload) {
            state.blogHTML = payload;
            //console.log(state.blogHTML);
          },
          updateBlogTitle(state, payload) {
            state.blogTitle = payload;
          },
          fileNameChange(state, payload) {
            state.blogPhotoName = payload;
          },
          createFileURL(state, payload) {
            state.blogPhotoFileURL = payload;
          },
          openPhotoPreview(state) {
            state.blogPhotoPreview = !state.blogPhotoPreview;
          },
          toggleEditPost(state, payload) {
            state.editPost = payload;
            console.log(state.editPost);
          },
    },
    actions: {
 
        async getPost({ state }) {
            const dataBase = await db.collection('blogPosts').orderBy('date', 'desc');
            const dbResults = await dataBase.get();
            dbResults.forEach((doc) => {
              if (!state.blogPosts.some(post => post.blogID === doc.id)) {
                const data = {
                  blogID: doc.data().blogID,
                  blogHTML: doc.data().blogHTML,
                  blogCoverPhoto: doc.data().blogCoverPhoto,
                  blogTitle: doc.data().blogTitle,
                  blogDate: doc.data().date,
                  blogCoverPhotoName: doc.data().blogCoverPhotoName,
                };  
                state.blogPosts.push(data);
              }
            });
            state.postLoaded = true;
            //console.log(state.blogPosts); 
          },
          async deletePost({commit}, payload) {
            const getPost = await db.collection('blogPost').doc(payload);
            await getPost.delete();
            commit('filterBlogPost', payload);
          },
          async updatePost({commit, dispatch}, payload) {
            commit("filterBlogPost", payload);
            await dispatch("getPost");
          },
    },
    modules: {
        
    },
})