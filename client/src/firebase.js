// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-e0572.firebaseapp.com",
  projectId: "mern-estate-e0572",
  storageBucket: "mern-estate-e0572.firebasestorage.app",
  messagingSenderId: "980224286951",
  appId: "1:980224286951:web:5d5aadb0bdf2d8b8f80242"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);