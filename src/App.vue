<template>
  <div class="app">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

//import firebase from "firebase/app";
//import "firebase/auth";

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  created() {
    
    firebase.auth().signInWithEmailAndPassword('a@ddd.com', 'wjd#751953').then(() => {
                this.$router.push({ name: "Home"});
                this.error = false;
                this.errorMsg = "";
                console.log(firebase.auth().currentUser.uid);
            }).catch(err => {
                this.error = true;
                this.errorMsg = err.message;
            })
            this.$store.dispatch("getPost");
                    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("updateUser", user);

    });
  },
  
  mounted() {
  
  },
  
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}
.app {
}
.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}
.info {
  text-decoration: none;
}
</style>
