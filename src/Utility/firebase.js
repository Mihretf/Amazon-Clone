// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcE7P1GT7R36yveJREFr886k6XyNOPrDY",
  authDomain: "clone-92713.firebaseapp.com",
  projectId: "clone-92713",
  storageBucket: "clone-92713.appspot.com", // Corrected the storage bucket URL
  messagingSenderId: "19634151698",
  appId: "1:19634151698:web:6174b1eb4e3c799e2b53cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
