// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSD_CXoXrnUHeypKHbExmDHqcVklmMOo",
  authDomain: "todo-app-3b51f.firebaseapp.com",
  projectId: "todo-app-3b51f",
  storageBucket: "todo-app-3b51f.appspot.com",
  messagingSenderId: "624436356095",
  appId: "1:624436356095:web:142e260ff16ac9018dfdca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
