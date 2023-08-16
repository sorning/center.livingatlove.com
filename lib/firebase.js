import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkrAfVP3BrDQq1VAsgQc2-lJVbLTpPG8U",
  authDomain: "nextjsfirebasefirestore1.firebaseapp.com",
  projectId: "nextjsfirebasefirestore1",
  storageBucket: "nextjsfirebasefirestore1.appspot.com",
  messagingSenderId: "932219636780",
  appId: "1:932219636780:web:8769fe1e2f5be5f5e39589",
  measurementId: "G-X8QGZ8FT27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

