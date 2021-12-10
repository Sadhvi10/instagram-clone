// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAScdi-r4Wt9OvIYLLLZEb-j_kvrm4nqno",
  authDomain: "instagram-clone-6aa62.firebaseapp.com",
  projectId: "instagram-clone-6aa62",
  storageBucket: "instagram-clone-6aa62.appspot.com",
  messagingSenderId: "333141237828",
  appId: "1:333141237828:web:aa2f8eca5f0ee618885c11",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize firestore db
const db = getFirestore();

// Initialize firebase storage
const storage = getStorage();

export { app, db, storage };
