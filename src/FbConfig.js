
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPyDgwja2mxRsiEf_3Pwrgi0oHdUALrNc",
  authDomain: "ashu1808blog.firebaseapp.com",
  projectId: "ashu1808blog",
  storageBucket: "ashu1808blog.appspot.com",
  messagingSenderId: "1094485322044",
  appId: "1:1094485322044:web:b667336693daeab7a35639"
};

const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider();