// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANKDMgRwUv4802q_aoDjnmoSw0ZTJjOqE",
  authDomain: "movie-app-6eb07.firebaseapp.com",
  projectId: "movie-app-6eb07",
  storageBucket: "movie-app-6eb07.appspot.com",
  messagingSenderId: "194128662278",
  appId: "1:194128662278:web:548da5211016ea9b089887"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);