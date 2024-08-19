// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8nfbeYcnaAC6P81mJSLNHXnpbLuJuEdY",
  authDomain: "handsup-eb897.firebaseapp.com",
  databaseURL: "https://handsup-eb897-default-rtdb.firebaseio.com",
  projectId: "handsup-eb897",
  storageBucket: "handsup-eb897.appspot.com",
  messagingSenderId: "154408166480",
  appId: "1:154408166480:web:6004cfe973c3303d8fdd55",
  measurementId: "G-M858ZP2QNC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export {storage, analytics}