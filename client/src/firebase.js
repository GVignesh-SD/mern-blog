// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-236e9.firebaseapp.com",
  projectId: "mern-blog-236e9",
  storageBucket: "mern-blog-236e9.appspot.com",
  messagingSenderId: "450893815913",
  appId: "1:450893815913:web:3d637a24e9ebd6aae3c2f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
