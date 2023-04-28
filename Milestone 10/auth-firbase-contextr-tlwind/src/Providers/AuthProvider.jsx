import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firbase/firbase.config';

export const AuthContext = createContext(null);
 const auth = getAuth(app);
const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)

  const createUser = (email, password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
  const unsubscribe =  onAuthStateChanged(auth,currentUser =>{
        console.log("set",currentUser);
        setUser(currentUser)
    })
    return ()=>{
        unsubscribe()
    }
  },[])

  const userInf = {
    createUser,
    loginUser,
    user,
    logOut
  };
    return (
        <AuthContext.Provider value={userInf}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;