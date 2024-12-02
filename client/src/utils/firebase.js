// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "taskmanager-9debd.firebaseapp.com",
  projectId: "taskmanager-9debd",
  storageBucket: "taskmanager-9debd.firebasestorage.app",
  messagingSenderId: "913171049562",
  appId: "1:913171049562:web:60086a5d816dda71097c63",
  measurementId: "G-C9GX58KXP0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);