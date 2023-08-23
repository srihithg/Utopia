// Firebase core SDK (required)
import { initializeApp } from "firebase/app";

// Firestore
import { getFirestore } from "firebase/firestore";

// Auth and Google Provider
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Storage
import { getStorage } from "firebase/storage";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB44NHxSGktmM1RbtPanjqNkaUT_CPHsfA",
  authDomain: "linkedin-clone2-cf7bf.firebaseapp.com",
  projectId: "linkedin-clone2-cf7bf",
  storageBucket: "linkedin-clone2-cf7bf.appspot.com",
  messagingSenderId: "286644282412",
  appId: "1:286644282412:web:1d07636c15a7cedb795d89",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Initialize Firebase Auth and Google Provider
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

// Export what you'll use outside
export { auth, provider, storage };
export default db;
