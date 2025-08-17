// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDojBI9MEhep-cuVCoo5ThhF5VzLN7Y33M",
  authDomain: "react-news-ba514.firebaseapp.com",
  projectId: "react-news-ba514",
  storageBucket: "react-news-ba514.appspot.com",  // ✅ fixed typo: '.app' ➜ '.appspot.com'
  messagingSenderId: "613885041607",
  appId: "1:613885041607:web:3bccbd2babb3b0edd1d7e2",
  measurementId: "G-FJ85C5Z08C"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export for use in Login.js, Sign.js, etc.
export { auth, db };
