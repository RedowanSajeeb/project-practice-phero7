// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouts = ({ children }) => {
  const location = useLocation()
  const { user, loding } = useContext(AuthContext);
  if (loding) {
    return (
      <div>
        <progress
          className="progress progress-error w-56"
          value="0"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="10"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="40"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
        <progress
          className="progress progress-error w-56"
          value="100"
          max="100"
        ></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default PrivateRouts;