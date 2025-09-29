// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-cc4f9.firebaseapp.com",
  projectId: "realestate-cc4f9",
  storageBucket: "realestate-cc4f9.firebasestorage.app",
  messagingSenderId: "597975931108",
  appId: "1:597975931108:web:ba34f7dc964bf9562c34f1",
  measurementId: "G-4F7VLQYHH8"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);