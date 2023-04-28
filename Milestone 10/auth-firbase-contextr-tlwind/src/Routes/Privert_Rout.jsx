import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const Privert_Rout = ({children}) => {
    const { user, loding } = useContext(AuthContext);
    if (loding){
        return <h1>LOding</h1>
    }
      if (user) {
        return children;
      }
   
    return <Navigate to={"/login"} replace={true}></Navigate>;
};

export default Privert_Rout;