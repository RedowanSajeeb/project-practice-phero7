import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
const NavigationNav = () => {
  const { user, logggout } = useContext(AuthContext);

  const loggggout = () =>{
    logggout ()
  }
  return (
    <Container>
      <Navbar
        className="mt-3"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-muted mt-2 text-decoration-none" to={"/"}>
                Home
              </Link>
              <Nav.Link className="disabled" href="#pricing">
                About
              </Nav.Link>
              <Nav.Link className="disabled" href="#pricing">
                Career
              </Nav.Link>
            </Nav>
            <Nav>
              {user && (
                <FaUserCircle className="me-3" style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button onClick={loggggout} variant="secondary">Logout</Button>
              ) : (
                <Link to={"/login"}>
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationNav;
