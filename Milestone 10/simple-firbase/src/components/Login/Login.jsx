import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
  

    const googleHandelarClick = ()=>{
      signInWithPopup(auth,provider)
      .then((result) =>{
         const signInuser = result.user;
         console.log(signInuser);
         setUser(signInuser)
      })
      .catch((error)=>{
        console.log("error",error.message);
      })

    }

    const signOuthendler = () =>{
        signOut(auth)
        .then(result =>{
            setUser(null)
            console.log(result);
        })
        .catch(error =>{
            console.log(error);
        })


  
    }

    return (
      <div>

        { user?<button onClick={signOuthendler}>signOut</button> :
        <button onClick={googleHandelarClick}>Go Google</button>}
        {user && (
          <div>
            User: {user.displayName}
            <p>Email : {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    );
};

export default Login;