import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxIIajiofSwJq_TPfQL2G3xDAbBva4bCk",
  authDomain: "blogs-9bef6.firebaseapp.com",
  projectId: "blogs-9bef6",
  storageBucket: "blogs-9bef6.appspot.com",
  messagingSenderId: "820591015969",
  appId: "1:820591015969:web:977a354b83ac7c4115cb60"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();