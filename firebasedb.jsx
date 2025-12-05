import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2diMojLNiCgMj3GUcddUswDv30W5WLxE",
  authDomain: "perdaycoaching.firebaseapp.com",
  projectId: "perdaycoaching",
  storageBucket: "perdaycoaching.appspot.com",
  messagingSenderId: "303500461503",
  appId: "1:303500461503:web:3abb12cd208f4419880d0a",
  measurementId: "G-F1R8P3YBFS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };