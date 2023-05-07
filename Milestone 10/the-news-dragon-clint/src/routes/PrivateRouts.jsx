import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import router from './Routs';

const PrivateRouts = ({children}) => {
    const location = useLocation()
    const { user, loader } = useContext(AuthContext);
    if (loader) {
      return (
        <div>
          <h2>loding</h2>
        </div>
      );
    }
      if (user) {
        return children;
      }
    return (
      <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
    );
};

export default PrivateRouts;