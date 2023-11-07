// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG9w-bUpgFCZiy5Exb0GNtDzqSAZd9Abw",
  authDomain: "nflix-gpt.firebaseapp.com",
  projectId: "nflix-gpt",
  storageBucket: "nflix-gpt.appspot.com",
  messagingSenderId: "209307929543",
  appId: "1:209307929543:web:36a47f491911188067e7e2",
  measurementId: "G-2GW8DZYE0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);