// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1u11uTy6EkfpQwK02xof6hwh2l-xPVV8",
    authDomain: "dreamy-electric.firebaseapp.com",
    projectId: "dreamy-electric",
    storageBucket: "dreamy-electric.appspot.com",
    messagingSenderId: "1055962469832",
    appId: "1:1055962469832:web:8e9bc3e822b9e53b749cfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;