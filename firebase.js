// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBB9h0_bMcIZoxQ02K5wr63Bwpo_1uXeFA",
  authDomain: "test-bb2ea.firebaseapp.com",
  databaseURL: "https://test-bb2ea-default-rtdb.firebaseio.com",
  projectId: "test-bb2ea",
  storageBucket: "test-bb2ea.appspot.com",
  messagingSenderId: "194533806709",
  appId: "1:194533806709:web:abfb990b4d66420fac5e3c",
  measurementId: "G-KGHM4YHCD0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);

