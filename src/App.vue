<template>
  <div class="app">
    <Navigation class="navigation"/>
    <router-view class="content" />
    <Footer class="footer"/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';


//import firebase from "firebase/app";
//import "firebase/auth";

export default {
  name: 'App',
  components: {
    Navigation,
    Footer,
  },
  created() {
    

  },
  
  mounted() {
    
  },
  
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {

}
.content {
  
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
