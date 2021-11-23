import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHONcUJ0T970RFeNh3z8HjhjndrYNv2sw",
  authDomain: "blogs-vue-fcf73.firebaseapp.com",
  projectId: "blogs-vue-fcf73",
  storageBucket: "blogs-vue-fcf73.appspot.com",
  messagingSenderId: "417643567969",
  appId: "1:417643567969:web:a8934d04996eaeb5c38320"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();