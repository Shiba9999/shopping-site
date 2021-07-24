import firebase from "firebase"
import 'firebase/auth';
import 'firebase/firestore';
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBvhVUYfdFKwLZskwzI6jdCjL5nmWdAH24",
  authDomain: "shopping-site-37160.firebaseapp.com",
  projectId: "shopping-site-37160",
  storageBucket: "shopping-site-37160.appspot.com",
  messagingSenderId: "292620816342",
  appId: "1:292620816342:web:cfeae7b4d2b3e48b3d5e77",
  measurementId: "G-PQZ20BV0F3"
};
const firebaseApp=firebase.initializeApp(firebaseConfig);
export const db=firebase.firestore();
export const auth=firebase.auth();
export const storage = firebase.storage();
export default auth;