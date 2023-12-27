// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBvbOGb1eC6XPS6ODEZtbrbfOBxjwKf34",
  authDomain: "book-list01.firebaseapp.com",
  projectId: "book-list01",
  storageBucket: "book-list01.appspot.com",
  messagingSenderId: "72014322936",
  appId: "1:72014322936:web:9dbe492d7744d18ae3ef0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)