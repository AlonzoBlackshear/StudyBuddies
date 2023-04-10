// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBApNjYsQ0CIQdqvRUEtAwFkDSZDOG3BNk",
  authDomain: "study-buddies-1044c.firebaseapp.com",
  projectId: "study-buddies-1044c",
  storageBucket: "study-buddies-1044c.appspot.com",
  messagingSenderId: "778502209383",
  appId: "1:778502209383:web:00687bcd8e9f467aa679c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);