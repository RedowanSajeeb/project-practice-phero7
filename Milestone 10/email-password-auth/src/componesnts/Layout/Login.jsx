import React, { useRef, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import app from "../../Firebase/firebaseConfiguration";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link } from "react-router-dom";
const auth = getAuth(app);
const Login = () => {
  const [logerror, setLogerror] = useState("");
  const [sussesful, setSussesful] = useState("");
  const emailRef = useRef();
  const logInpageHendel = (event) => {
    event.preventDefault();
    const fromdata = event.target;
    const email = fromdata.email.value;
    const password = fromdata.password.value;
    console.log(email, password);
    setLogerror("");
    setSussesful("");
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setLogerror("Ensure string has two uppercase letters");
      return;
      // } else if (!/(?=.*[!@#$&*])/) {
      //   setLogerror("Ensure string has one special case letter");
      //   return;
    } else if (!/(?=.*[0-9].*[0-9])/) {
      setLogerror("Ensure string has two digits");
      return;
    } else if (!/.{7}/.test(password)) {
      // length
      setLogerror("Ensure string is of length 7.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        if (!user.emailVerified) {
          alert("email emailVerified Not bro");
          // return;
        }
        setSussesful("yah Login Sussesful");
        setLogerror("");
      })
      .catch((error) => {
        setLogerror(error.message);
        console.log(error);
      });
  };
  const forgetBtnEventHendel = () => {
    // console.log(emailRef.current.value);
    const email = emailRef.current.value;
    if (!email) {
      alert("email de vi ree");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSussesful("plz ck Your email and passowerd reset");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        logerror(errorMessage);
        // ..
      });
  };

  function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  return (
    <div onSubmit={logInpageHendel}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <h1>Login plz</h1>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  required
                  ref={emailRef}
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  {/* We'll never share your email with anyone else. */}
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  required
                  id="myInput"
                  placeholder="Password"
                />
                <h2 onClick={myFunction}>🙀 </h2>
              </Form.Group>

              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <p>
                Register?{" "}
                <Link to={"/registerRBoostrap"}>
                  <>Click R</>
                </Link>
              </p>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <br />
              <>
                <h1 onClick={forgetBtnEventHendel} className="btn btn-link">
                  Forget
                </h1>
              </>
              <p className="">{logerror}</p>
              <p>{sussesful}</p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
