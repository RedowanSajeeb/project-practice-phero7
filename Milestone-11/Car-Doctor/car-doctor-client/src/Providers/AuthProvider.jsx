// import React from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.conf";




export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loding,setLoding] = useState(true)


const createUser = (email, password) =>{
    setLoding(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const signinUserPassword = (email, password) =>{
    setLoding(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut = () =>{
    setLoding(true)
    return signOut(auth)
}

const googleSignin = () =>{
    setLoding(true)
  return signInWithPopup(auth,googleProvider)
}


useEffect(() =>{
 const unSub =  onAuthStateChanged(auth,currentUser =>{
       setUser(currentUser)
        setLoding(false)
        if(currentUser && currentUser.email){
             const loggedUser = {
               email: currentUser.email,
             };
            fetch("https://car-doctor-server-redowansajeeb.vercel.app/jwt", {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(loggedUser),
            })
              .then((res) => res.json())
              .then((data) => {
                // console.log('jwt-respons',data);
                localStorage.setItem("jwt-response", data.token);
              });
        }
        else{
              localStorage.removeItem("jwt-response");
        }
     })
     return () =>{
        return unSub
     }
},[])

const authInf = {
  user,
  loding,
  createUser,
  signinUserPassword,
  logOut,
  googleSignin,
};



    return (
        <AuthContext.Provider value={authInf}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;