import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBPRbtlIMkKVxR6kLlppmHFBp741UOrCwY",

  authDomain: "login-831f9.firebaseapp.com",

  projectId: "login-831f9",

  storageBucket: "login-831f9.appspot.com",

  messagingSenderId: "753667061387",

  appId: "1:753667061387:web:9204c61e2d2e6e3439468e"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
