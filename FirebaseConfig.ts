import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyAUZYQYFvV04sLRXkHHmnxv3Hisqg8rT7U",
  authDomain: "purreverhome-3a57d.firebaseapp.com",
  projectId: "purreverhome-3a57d",
  storageBucket: "purreverhome-3a57d.appspot.com",
  messagingSenderId: "661002641418",
  appId: "1:661002641418:web:ef6741210d02e54d3a7ff3",
  measurementId: "G-7LFS1KNQKV"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the authentication instance
const auth = getAuth(app);

export { auth }; // Export the auth instance
export default app;
