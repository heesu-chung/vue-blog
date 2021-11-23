<template>
    <div class="create-post">
      <div class="container">
        <div :class="{invisible: !error}" class="err-message">
              <p><span>Error:</span>{{this.errorMsg}}</p>
          </div>
        <div class="blog-info">
          <input type="text" placeholder="Title Here!" v-model="blogTitle">
          <div class="upload-img">
            <label for="blog-photo">Cover Upload</label>
            <input type="file" ref="blogPhoto" id="blog-photo" @change="fileChange" accept=".png, .jpeg, .jpg, .gif">
            <span>File uploaded: {{this.$store.state.blogPhotoName}}</span>
          </div>
        </div>

        <div class="editor">
          <vue-editor 
            :editorOptions="editorSettings"
            v-model="blogHTML"
            useCustomImageHandler
            @image-added="imageHandler"
            />
        </div>

        <div class="blog-actions">
          <button @click="uploadBlog">Publish</button>
          
        </div>
      </div>
    </div>
</template>

<script>
import Quill from 'quill';
import "firebase/compat/storage";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";

window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);

export default {
    name: 'CreatePost',
    data() {
      return {
        file: null,
        error: null,
        errorMsg: null,
        editorSettings: {
          modules: {
            imageResize: {},
          },
        },
      }
    },
    components: {
    },
    methods: {
      fileChange() {
        this.file = this.$refs.blogPhoto.files[0];
        const fileName = this.file.name;

        this.$store.commit("fileNameChange", fileName);
        this.$store.commit("createFileURL", URL.createObjectURL(this.file));
      },
      imageHandler(file, Editor, cursorLocation, resetUploader) {
            const storageRef = firebase.storage().ref();
            const docRef = storageRef.child(`documents/blogPostPhotos/${file.name}`);
            docRef.put(file).on(
                "state_changed", 
                (snapshot) => {
                console.log(snapshot);
            }, (err) => {
                console.log(err);
            }, async () => {
                const downloadURL = await docRef.getDownloadURL();
                Editor.insertEmbed(cursorLocation, "image", downloadURL);
                resetUploader();
            });
        },
      uploadBlog() {
            if(this.blogTitle.length !== 0 && this.blogHTML.length !== 0) {
               if(this.file) {
                    const storageRef = firebase.storage().ref();
                    const docRef = storageRef.child(`documents/BlogCoverPhotos/${this.$store.state.blogPhotoName}`);
                    docRef.put(this.file).on("state_changed", (snapshot) => {
                        console.log(snapshot);
                    }, (err) => {
                        console.log(err);
                        
                    }, async () => {
                        const downloadURL = await docRef.getDownloadURL();
                        const timestamp = await Date.now();
                        const dataBase = await db.collection("blogPosts").doc();

                        await dataBase.set({
                            blogID: dataBase.id,
                            blogHTML: this.blogHTML,
                            blogCoverPhoto: downloadURL,
                            blogCoverPhotoName: this.blogCoverPhotoName,
                            blogTitle: this.blogTitle,
                            profileId: this.profileId,
                            date: timestamp,
                        });
                        await this.$store.dispatch("getPost");
                        this.$router.push({ name: "Home"});
                    }
                    );
                    return;
               }
                this.error = true;
                this.errorMsg = "Please ensure you uploaded a cover photo!";
                setTimeout(() => {
                    this.error = false;
                }, 5000);
                return;                
            }
            this.error = true;
            this.errorMsg = "Please ensure Blog Title & Blog Post has been filled!";
            setTimeout(() => {
                this.error = false;
            }, 5000);
            return;
        },
    },
    computed: {
        profileId () {
            return this.$store.state.profileId;
        },
        blogCoverPhotoName() {
            return this.$store.state.blogPhotoName;
        },
        blogTitle: {
            get() {
                return this.$store.state.blogTitle;
            },
            set(payload) {
                this.$store.commit("updateBlogTitle", payload);
            }
        },
        blogHTML: {
            get() {
                return this.$store.state.blogHTML;
            },
            set(payload) {
                this.$store.commit("newBlogPost", payload);
            }
        },
    },
}
</script>

<style lang="scss" scoped>

</style>