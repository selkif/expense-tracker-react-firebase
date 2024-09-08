// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkdANKAkzEaCugSbI1ixqOXeCsyfjjlrA",
  authDomain: "expense-tracker-4d592.firebaseapp.com",
  projectId: "expense-tracker-4d592",
  storageBucket: "expense-tracker-4d592.appspot.com",
  messagingSenderId: "493927034926",
  appId: "1:493927034926:web:724ade7ae8dccf0ead2fbf",
  measurementId: "G-5GCQRJZX8T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
