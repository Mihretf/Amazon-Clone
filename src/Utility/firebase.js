
import { initializeApp } from "firebase/compat/app";

import {getAuth} from "firebase/auth"
import "firebase/compat/fiestore"
import "firebase/compat/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcE7P1GT7R36yveJREFr886k6XyNOPrDY",
  authDomain: "clone-92713.firebaseapp.com",
  projectId: "clone-92713",
  storageBucket: "clone-92713.firebasestorage.app",
  messagingSenderId: "19634151698",
  appId: "1:19634151698:web:6174b1eb4e3c799e2b53cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db = app.firestore()