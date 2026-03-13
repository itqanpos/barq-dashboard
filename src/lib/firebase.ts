import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDV0HjFKfKEjKHKQqEfLjQhKxLxLLK5jYE",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "itqan-pos.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "itqan-pos",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "itqan-pos.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "581420315",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:581420315:web:8e3d5c2f8c9a1b2d3e4f5g"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
