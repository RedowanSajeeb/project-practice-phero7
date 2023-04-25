import React from 'react';
import "../Layout/Register.css";
const Register = () => {

    const emailHeandalOnching = (event) =>{
        // console.log(event.target.value);
    }
const passOnBlurhandel =(event)=>{
//   console.log(event.target.value);
}
const onSubmitHendel =(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
}

    return (
      <>
        <h2>Registration</h2>
        <form onSubmit={onSubmitHendel}> 
          <div className="flex">
            <h2>Email:</h2>
            <input onChange={emailHeandalOnching}
              type="email"
              name="email"
              placeholder="Type in Your Email"
              id=""
            />
          </div>
          <div className="flex">
            <h2>Password:</h2>
            <input onBlur={passOnBlurhandel} 
              type="password"
              name="password"
              placeholder="Type in Your Password"
              id=""
            />
          </div>
          <input className='btn btn-danger' type="submit" value="Submit" />
        </form>
      </>
    );
};

export default Register;