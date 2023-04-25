import React from 'react';
import "../Layout/Register.css";
const Register = () => {
    return (
      <>
        <h2>Registration</h2>
        <form>
          <div className="flex">
            <h2>Email:</h2>
            <input
              type="email"
              name=""
              placeholder="Type in Your Email"
              id=""
            />
          </div>
          <div className="flex">
            <h2>Password:</h2>
            <input
              type="password"
              name=""
              placeholder="Type in Your Password"
              id=""
            />
          </div>
        </form>
      </>
    );
};

export default Register;