import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClchLxp9IqtftF8BLLM98CoCLCFePB9aY",
  authDomain: "fireblogs-2bad5.firebaseapp.com",
  projectId: "fireblogs-2bad5",
  storageBucket: "fireblogs-2bad5.appspot.com",
  messagingSenderId: "665983356156",
  appId: "1:665983356156:web:45096f22498df30b9b9b79"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {timestamp};
  export default firebaseApp.firestore();