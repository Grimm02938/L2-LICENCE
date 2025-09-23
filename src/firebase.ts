// Firebase initialization (idempotent) and browser-safe Analytics
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported, type Analytics } from "firebase/analytics";
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

// Initialize Firebase (avoid duplicate app during HMR)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// Initialize Analytics only in the browser and when supported
let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  // Best-effort: don't block app startup if Analytics isn't supported
  analyticsIsSupported()
    .then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    })
    .catch(() => {
      // ignore analytics initialization errors
    });
}

export { app, analytics };