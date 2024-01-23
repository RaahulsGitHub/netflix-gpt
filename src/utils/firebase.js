// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgsqqlpkEspwdiz2EHowAPZcTkKJ4wxVQ",
  authDomain: "netflixgpt-13ee8.firebaseapp.com",
  projectId: "netflixgpt-13ee8",
  storageBucket: "netflixgpt-13ee8.appspot.com",
  messagingSenderId: "761786908345",
  appId: "1:761786908345:web:541beecd670146e6912568",
  measurementId: "G-28HTZN2VWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();