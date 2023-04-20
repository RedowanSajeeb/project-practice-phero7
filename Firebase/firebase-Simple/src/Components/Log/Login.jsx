import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/firebase.int';
const Login = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
const handleGoogleSignIN = ()=>{
   signInWithPopup(auth,provider)
   .then(result =>{
    const user = result.user;
    console.log(user);
   })
 .catch(error =>{
  console.log("error",error.message);
 })
   
}

    return (
      <div>
        <button onClick={handleGoogleSignIN}>Go Tooo Gooogle!</button>
      </div>
    );
};

export default Login;