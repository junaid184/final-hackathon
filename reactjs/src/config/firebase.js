// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3rXHEdkk-gu1dFkeQrW14l0JC_XulPpk",
  authDomain: "khanasabkliyesaylaniwelfare.firebaseapp.com",
  projectId: "khanasabkliyesaylaniwelfare",
  storageBucket: "khanasabkliyesaylaniwelfare.appspot.com",
  messagingSenderId: "585350034214",
  appId: "1:585350034214:web:802f0c0a7b9262155807e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
