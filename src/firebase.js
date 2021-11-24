import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAZo5Mt7Bb3dVTEjiaq6kn-pgL3lPHqv4k",
  authDomain: "snapchat-clone-9a995.firebaseapp.com",
  projectId: "snapchat-clone-9a995",
  storageBucket: "snapchat-clone-9a995.appspot.com",
  messagingSenderId: "556737758953",
  appId: "1:556737758953:web:8ce3128b9db09f281a1278"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, storage, provider }