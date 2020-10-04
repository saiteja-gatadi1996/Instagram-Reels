import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAJU3C2HTYYDaoaxgUYZOs3kzMZ0qy24LE",
    authDomain: "instagramreelsapp.firebaseapp.com",
    databaseURL: "https://instagramreelsapp.firebaseio.com",
    projectId: "instagramreelsapp",
    storageBucket: "instagramreelsapp.appspot.com",
    messagingSenderId: "918090184864",
    appId: "1:918090184864:web:fc47079aef1fc455b071c5",
    measurementId: "G-MTR96DRTZL"
  };


const firebaseApp =firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
export default db;