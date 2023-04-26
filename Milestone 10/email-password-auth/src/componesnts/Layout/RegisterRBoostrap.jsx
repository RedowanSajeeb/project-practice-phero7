import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebaseConfiguration";
import { Link } from "react-router-dom";
const auth = getAuth(app);

const RegisterRBoostrap = () => {
  const [errormsg, setErrormsg] = useState("");
  const [sussesful, setSussesful] = useState("");
  const formSubmitFb = (event) => {
    event.preventDefault();
    setSussesful("");
    setErrormsg("");
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.name.value;
    console.log(email, password);
    // validation
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setErrormsg("  Ensure string has two digits.");
      return;
    } else if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setErrormsg(" Ensure string has two uppercase letters");
      return;
    } else if (!/.{7}/.test(password)) {
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
        sendEmailVftion(reasult.user);
        ubdateUserdata(reasult.user, name);
      })
      .catch((error) => {
        console.error(error);
        setErrormsg(error.message);
      });

    // event.target.email.value = "";
    // event.target.password.value ="";
  };
  const sendEmailVftion = (currentUser) => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        alert("email visit");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const ubdateUserdata = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  // -----------
    function myFunction() {
      var x = document.getElementById("myInput");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

  return (
    <div>
      <Form onSubmit={formSubmitFb} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="Text"
            name="name"
            placeholder="Enter name"
            required
          />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
            id="myInput"
          />
          <h2 onClick={myFunction}>🙀 </h2>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="t & conditions" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        
        <p>
          <Link to={"/login"}>LOgin?</Link>
        </p>
        <p className="text-danger">{errormsg}</p>
        <p className="text-success">{sussesful}</p>
      </Form>
    </div>
  );
};

export default RegisterRBoostrap;
