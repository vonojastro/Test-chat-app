// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCksPVEgd3wkiuUDINrS-wSdoB1FJfUO0g",
  authDomain: "chat-app-4dc1c.firebaseapp.com",
  projectId: "chat-app-4dc1c",
  storageBucket: "chat-app-4dc1c.appspot.com",
  messagingSenderId: "493629227049",
  appId: "1:493629227049:web:8490c661f4a58923c8dc38",
  measurementId: "G-DRJ5972DEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
