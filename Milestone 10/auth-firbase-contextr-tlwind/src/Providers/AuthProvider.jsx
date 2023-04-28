import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firbase/firbase.config';

export const AuthContext = createContext(null);
 const auth = getAuth(app);
 const googProvider = new GoogleAuthProvider() 
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loding,useLoding] = useState(true);

  const createUser = (email, password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const usingGoogle = ()=>{
   return signInWithPopup(auth,googProvider)
  }
  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
        console.log("set",currentUser);
        setUser(currentUser)
        useLoding(false);
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  const userInf = {
    createUser,
    loginUser,
    user,
    logOut,
    loding,
    usingGoogle,
  };
    return (
        <AuthContext.Provider value={userInf}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;