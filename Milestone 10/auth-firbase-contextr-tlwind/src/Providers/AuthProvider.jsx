import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

  const userInf = {
    createUser,
    loginUser
  };
    return (
        <AuthContext.Provider value={userInf}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;