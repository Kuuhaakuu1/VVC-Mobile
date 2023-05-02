import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';





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

if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase Connected')

}

export {firebase};
