// import firebase from "firebase/app";

// import "firebase/firebase-analytics";
// import "firebase/firebase-database";
// import "firebase/firebase-functions";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTHDOMAIN,
//   databaseURL: process.env.REACT_APP_BASEURL,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// export default {
//   firebaseConfig,
// };

// export const LoadAnalytics = () => {
//   firebase.analytics();
// };

// export const db = firebase.database();
// // Initialize Cloud Functions through Firebase
// export const functions = firebase.functions();

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyBtNsrzEUisQZV_qJJAJhAYbrmHgcnFmEo",
  authDomain: "puguessr.firebaseapp.com",
  databaseURL: "https://puguessr-default-rtdb.firebaseio.com",
  projectId: "puguessr",
  storageBucket: "puguessr.appspot.com",
  messagingSenderId: "290418685045",
  appId: "1:290418685045:web:057f885da9678075d2f43c"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database, analytics };
