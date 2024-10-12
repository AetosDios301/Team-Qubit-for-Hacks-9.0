// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArbKP03GeM3xpN4h657wQXRNe_Q2MJHck",
  authDomain: "healthbridge-login-a6783.firebaseapp.com",
  projectId: "healthbridge-login-a6783",
  storageBucket: "healthbridge-login-a6783.appspot.com",
  messagingSenderId: "485537590749",
  appId: "1:485537590749:web:d25161f02f1b6a7175da34",
  measurementId: "G-X69BQ2QCH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);