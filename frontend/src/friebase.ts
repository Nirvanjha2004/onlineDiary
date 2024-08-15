// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaPCZKmKSKkE8SeH_V_X09ZNgBfOl3beQ",
  authDomain: "online-diary-8d3ae.firebaseapp.com",
  projectId: "online-diary-8d3ae",
  storageBucket: "online-diary-8d3ae.appspot.com",
  messagingSenderId: "1097097649636",
  appId: "1:1097097649636:web:5c26658a67e8280fb2bbf1",
  measurementId: "G-G1BY9RKYDL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth=  getAuth(app);