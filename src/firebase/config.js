// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqXLxesBetvmp_PnQMg7kqkGb9l_tElr8",
  authDomain: "moviestack-cc2b0.firebaseapp.com",
  projectId: "moviestack-cc2b0",
  storageBucket: "moviestack-cc2b0.appspot.com",
  messagingSenderId: "910108752069",
  appId: "1:910108752069:web:bbe11201aa459301db98ac",
  measurementId: "G-QQV08H5QGV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);