// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBg_eUZXhKJQjzT6UVLI7pXEq0StEHbRc4",
  authDomain: "my-portfolio2-8b709.firebaseapp.com",
  projectId: "my-portfolio2-8b709",
  storageBucket: "my-portfolio2-8b709.appspot.com",
  messagingSenderId: "784033292384",
  appId: "1:784033292384:web:1385eb248757008d74e305",
  measurementId: "G-KCDZS0N500"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);