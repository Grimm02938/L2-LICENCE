// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvOJ7edY4hv6RDe7xUUMjRURhkYUhcuvI",
  authDomain: "l2-maths.firebaseapp.com",
  projectId: "l2-maths",
  storageBucket: "l2-maths.firebasestorage.app",
  messagingSenderId: "810429401064",
  appId: "1:810429401064:web:d9c25cd2ec5218078c465d",
  measurementId: "G-YY4BTF0V41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };