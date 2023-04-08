import React from 'react';
import Nav from "react-bootstrap/Nav";
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';
const Navbar = () => {
    return (
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>
            <ActiveLink eventKey="link-1" to={`/`}>
              
              Home
            </ActiveLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="" eventKey="link-2">
            <ActiveLink to={`HomeFoods`}>HomeBrands</ActiveLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
    );
};

export default Navbar;