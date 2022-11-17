 import firebase from "firebase/compat/app";

import  "firebase/compat/auth";
import  "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBikqtTdMU2KEPzVa9lsc1B56DR00HcDks",
    authDomain: "linkdin-clone-158b0.firebaseapp.com",
    projectId: "linkdin-clone-158b0",
    storageBucket: "linkdin-clone-158b0.appspot.com",
    messagingSenderId: "400119872286",
    appId: "1:400119872286:web:f11122cb3e7632888fa70f"
  };
 
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth(); 
  
  export {db, auth, };
