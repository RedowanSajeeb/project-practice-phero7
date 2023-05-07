import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { signInWithEmail } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const form = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const logindHendale = (event) => {
    event.preventDefault();
    const fromdata = event.target;
    const email = fromdata.email.value;
    const password = fromdata.password.value;
    setSuccess("");
    setSuccess("");
    signInWithEmail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setError("");
        setSuccess("Congratulations! Your login was successful");
        // ...
        navigate(form, { replace: true });
        event.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSuccess("");
        setError(errorMessage);
      });
  };
  return (
    <Container>
      <Form onSubmit={logindHendale} className="mx-auto w-25 mt-5">
        <h3>Login your account</h3>
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
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
        <Button variant="dark" type="submit">
          Login
        </Button>
        <h6 className="mt-3 mb-3">
          Dont’t Have An Account ?{" "}
          <Link className="text-danger" to={"/register"}>
            Register
          </Link>{" "}
        </h6>
        <Form.Text className="text-danger">{error}</Form.Text>
        <Form.Text className="text-success">{success}</Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
