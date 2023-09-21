// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbWRnLBSiaTkS0bBdOGy3fg9Uq3xuFn5k",
    authDomain: "food2go-10636.firebaseapp.com",
    projectId: "food2go-10636",
    storageBucket: "food2go-10636.appspot.com",
    messagingSenderId: "552575725547",
    appId: "1:552575725547:web:5835d3dcee45e7ac4173ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();