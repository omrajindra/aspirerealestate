// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMShR0xiru6CZihZyxGIvNfUERGPBXMMg",
  authDomain: "rora-2ad5c.firebaseapp.com",
  projectId: "rora-2ad5c",
  storageBucket: "rora-2ad5c.appspot.com",
  messagingSenderId: "957193811805",
  appId: "1:957193811805:web:b663f10781955da63f9ab4",
  measurementId: "G-4YFTS9JKTV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore();
