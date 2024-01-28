// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy7Fz-0OxwaGp8bLG_cKJhkkwS3UXTJuw",
  authDomain: "shilp24-61614.firebaseapp.com",
  projectId: "shilp24-61614",
  storageBucket: "shilp24-61614.appspot.com",
  messagingSenderId: "785875347113",
  appId: "1:785875347113:web:e068bbb60e69c6ac41abb8"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);