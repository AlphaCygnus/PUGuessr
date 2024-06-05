import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

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
export const database = getAuth(app)