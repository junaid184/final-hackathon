import * as firebase from "@firebase/app";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
   databaseURL: "https://saylani-hackthon-final-default-rtdb.firebaseio.com/",
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  firebase,
  db,
  auth,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
