// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATwc_Yj8fpEaHWJN7_CC51OJxj3T-Y1ac",
  authDomain: "otp-authen-92b5c.firebaseapp.com",
  projectId: "otp-authen-92b5c",
  storageBucket: "otp-authen-92b5c.appspot.com",
  messagingSenderId: "1018278194210",
  appId: "1:1018278194210:web:100e48697a7260179e2e7b",
  measurementId: "G-HWVJC59MRQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
