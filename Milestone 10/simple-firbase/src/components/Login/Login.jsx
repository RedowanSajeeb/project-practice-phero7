import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import app from '../../Firebase/firebase.config';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
const Login = () => {
    const [user,setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
   const facebookProvider = new FacebookAuthProvider();
    const googleHandelarClick = ()=>{
      signInWithPopup(auth,googleProvider)
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
const gitHubLoginOnClick = () =>{
    signInWithPopup(auth,githubProvider)
    .then(result=>{
        const userGithub = result.user;
        console.log(userGithub);
        setUser(userGithub);
    })
    .catch(error=>{
        console.log(error);
    })

}
const facebookLoginOnClick = () => {
  signInWithPopup(auth, facebookProvider)
    .then((reslt) => {
      console.log(reslt);
      const facebookuser = reslt.user;
      setUser(facebookuser);
    })
    .catch((error) => {
      console.log(error);
    });
};
    return (
      <div>
        {user ? (
          <button onClick={signOuthendler}>signOut</button>
        ) : (
          <>
            <button onClick={googleHandelarClick}>Go Google</button>

            <button onClick={gitHubLoginOnClick}>GitHub Login</button>
            <button onClick={facebookLoginOnClick}>facebook</button>
          </>
        )}

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