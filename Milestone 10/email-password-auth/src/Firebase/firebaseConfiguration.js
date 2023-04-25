// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65iRSJwhtHptjmLKfSeGdvWedBeBt5vI",
  authDomain: "email-passoward-auth.firebaseapp.com",
  projectId: "email-passoward-auth",
  storageBucket: "email-passoward-auth.appspot.com",
  messagingSenderId: "887823964289",
  appId: "1:887823964289:web:221de8c138053ea2259580",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;