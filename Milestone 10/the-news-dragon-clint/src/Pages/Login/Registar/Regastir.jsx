import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const Regastir = () => {
    const {emailAndPasswordcreate} = useContext(AuthContext)
 const [success, setSuccess] = useState("");
 const [error, setError] = useState("");
const hendaleregister = (event) =>{
   
    event.preventDefault();
    const fromdata = event.target;
    const name = fromdata.name.value;
    const photo = fromdata.url.value;
    const email = fromdata.email.value;
    const password = fromdata.password.value;

    emailAndPasswordcreate(email,password)
    setError('')
    setSuccess('')
      .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setSuccess("You have been authenticated and can now access your account.");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    // ..
  });

}

    return (
      <Container>
        <Form onSubmit={hendaleregister} className="mx-auto w-25 mt-5">
          <h3>Register your account</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="url"
              required
              placeholder="Enter Your Photo URL"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              required
              placeholder="Enter your password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              name="accept"
              label="Accept Term & Conditions"
            />
          </Form.Group>
          <Button variant="dark" type="submit">
            Register
          </Button>
          <h6 className="mt-3 mb-3">
            Already Have An Account ?{" "}
            <Link className="text-danger" to={"/login"}>
              Login
            </Link>{" "}
          </h6>
          <Form.Text className="text-danger">{error}</Form.Text>
          <Form.Text className="text-success">{success}</Form.Text>
        </Form>
      </Container>
    );
};

export default Regastir;