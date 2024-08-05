// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvDdoiPqMnxGSgbRCUdAa7GP3Wq3NRE-c",
  authDomain: "inventory-managment-ff35c.firebaseapp.com",
  projectId: "inventory-managment-ff35c",
  storageBucket: "inventory-managment-ff35c.appspot.com",
  messagingSenderId: "619277497495",
  appId: "1:619277497495:web:2375d43cc579c29a38e5d2",
  measurementId: "G-VQESLM2YWM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { firestore };