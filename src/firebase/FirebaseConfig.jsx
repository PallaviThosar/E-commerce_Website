
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIpFmfC1I6sX5h2CJIaJZI-g2-b0xMkjU",
  authDomain: "e-commerce2-a8a02.firebaseapp.com",
  projectId: "e-commerce2-a8a02",
  storageBucket: "e-commerce2-a8a02.appspot.com",
  messagingSenderId: "684841895150",
  appId: "1:684841895150:web:2951e401e9c91d63591fff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth } ;