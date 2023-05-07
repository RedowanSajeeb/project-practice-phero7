import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";
import { app } from "../Firebase/config.fire";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
const [user,setUser] = useState(null)
const [loader,setLoader] = useState(true)

    const emailAndPasswordcreate =(email,password)=>{
      setLoader(true);
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInWithEmail =(email,password) =>{
      setLoader(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
//  const profile = (auth)

const logggout = ()=>{
  signOut(auth)
}

useEffect(()=>{
 const unsubscript = onAuthStateChanged(auth, logduser =>{
  setLoader(false);
    setUser(logduser)
    

  })
  return () =>{
    return unsubscript()
  }
},[])

 
  const authInf = {
    user,
    loader,
    emailAndPasswordcreate,
    signInWithEmail,
    logggout,
  };
  return (
    <AuthContext.Provider value={authInf}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
