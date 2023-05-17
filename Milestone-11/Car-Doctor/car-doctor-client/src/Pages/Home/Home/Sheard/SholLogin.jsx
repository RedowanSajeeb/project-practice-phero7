// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProvider";

const SholLogin = () => {
    const {googleSignin} = useContext(AuthContext)
    const googlehandelar  = () =>{
        googleSignin()
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.         
            const user = result.user;
             console.log(user);
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
           console.log(errorCode, errorMessage);
            // ...
          });
    }
    return (
      <div>
        <div className="flex w-full">
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <button onClick={googlehandelar}>
              <img
                className="h-10"
                src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png"
                alt=""
              />
            </button>
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="grid h-20 flex-grow card bg-base-300 rounded-box place-items-center">
            <img
              className="h-10"
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default SholLogin;