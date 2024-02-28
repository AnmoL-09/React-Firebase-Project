// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw05n18XIZqqLmlrF4A5lM95weN49-nWE",
  authDomain: "react-project-33122.firebaseapp.com",
  projectId: "react-project-33122",
  storageBucket: "react-project-33122.appspot.com",
  messagingSenderId: "549858518926",
  appId: "1:549858518926:web:5cccca5be63d7242c226df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);