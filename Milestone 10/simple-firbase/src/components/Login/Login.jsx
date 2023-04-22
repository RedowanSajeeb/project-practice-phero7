import React from 'react';
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();


    const googleHandelarClick = ()=>{
      signInWithPopup(auth,provider)
      .then((result) =>{
         const user = result.user;
         console.log(user);
      })
      .catch((error)=>{
        console.log("error",error.message);
      })

    }

    return (
      <div>
        <button onClick={googleHandelarClick}>Go Google</button>
      </div>
    );
};

export default Login;