import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB8yJ8FLjEC8yYM5doCbi6ZXAkDuo5Ya6Y",
  authDomain: "contact-center-62bc0.firebaseapp.com",
  projectId: "contact-center-62bc0",
  storageBucket: "contact-center-62bc0.appspot.com",
  messagingSenderId: "439910080955",
  appId: "1:439910080955:web:484e306aa60eefdad0e49e"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase();
const firestore = getFirestore();
const storage = getStorage();
const auth = getAuth(app);

export { app, firestore, storage, auth,database };
