import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../Firebase/firebaseConfiguration';
const auth = getAuth(app);
 
const RegisterRBoostrap = () => {
const [errormsg, setErrormsg] = useState("");
const [sussesful,setSussesful] = useState("");
  const formSubmitFb = (event) =>{
      event.preventDefault();
        setSussesful("");
        setErrormsg('')
      const email = event.target.email.value
      const password = event.target.password.value
      console.log(email,password);
      // validation
      if (!/(?=.*[0-9].*[0-9])/.test(password)){
        setErrormsg("  Ensure string has two digits.");
        return;
      }
      else if (!/(?=.*[A-Z].*[A-Z])/.test(password)){
        setErrormsg(" Ensure string has two uppercase letters");
        return;
      }
      else if (!/.{7}/.test(password)){
        // length
        setErrormsg("Ensure string is of length 7.");
        return;
      }
        // ---------------------
        createUserWithEmailAndPassword(auth, email, password)
          .then((reasult) => {
            const userCredential = reasult.user;
            console.log(userCredential);
            setSussesful("yah great Job bro!");
            setErrormsg("");
            event.target.reset("");
          })
          .catch((error) => {
            console.error(error);
            setErrormsg(error.message);
          });


    // event.target.email.value = "";
    // event.target.password.value ="";
  }


    return (
      <div>
        <Form onSubmit={formSubmitFb} className='w-50 mx-auto mt-5'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' placeholder="Enter email" required />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' placeholder="Password" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="t & conditions" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <p className='text-danger'>{errormsg}</p>
          <p className='text-success'>{sussesful}</p>
        </Form>
      </div>
    );
};

export default RegisterRBoostrap;