// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-ZHYsaTn28hm8INjtf-G58JgPFtEmXxU",
  authDomain: "the-news-drag0n.firebaseapp.com",
  projectId: "the-news-drag0n",
  storageBucket: "the-news-drag0n.appspot.com",
  messagingSenderId: "51013020859",
  appId: "1:51013020859:web:7823918be70ce501524d9e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app
export {app}