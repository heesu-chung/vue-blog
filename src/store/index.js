import Vue from 'vue'
import Vuex from 'vuex'

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
   
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
        updateUser(state,payload) {
          state.user = payload;
        },
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
      async getCurrentUser({commit}) {
        const dataBase = await db.collection('users').doc(firebase.auth().currentUser.uid);
        const dbResults = await dataBase.get();
        commit("setProfileInfo", dbResults);
        commit("setProfileInitials");
        console.log(dbResults);
      },
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