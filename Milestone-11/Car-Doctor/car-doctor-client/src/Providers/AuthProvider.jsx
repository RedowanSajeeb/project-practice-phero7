// import React from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.conf";




export const AuthContext = createContext();
const auth = getAuth(app);

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

useEffect(() =>{
 const unSub =  onAuthStateChanged(auth,currentUser =>{
       setUser(currentUser)
        setLoding(false)
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