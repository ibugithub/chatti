// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwIlQNi0rAtO3K85we9X_lG1ZY-Eega6I",
  authDomain: "realchi-9ea8b.firebaseapp.com",
  projectId: "realchi-9ea8b",
  storageBucket: "realchi-9ea8b.appspot.com",
  messagingSenderId: "1087540568116",
  appId: "1:1087540568116:web:fbeb29d4930f5d2f00aa61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);