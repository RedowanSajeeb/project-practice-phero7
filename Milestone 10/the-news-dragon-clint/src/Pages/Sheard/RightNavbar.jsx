import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import bgImg from '../../assets/bg.png'
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "./QZone/QZone";
const RightNavbar = () => {
  return (
    <div>
      <div className="mt-3">
        <h4>Login With</h4>
        <Button className="mt-2" variant="outline-primary">
          {" "}
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button className="mt-2" variant="outline-secondary">
          {" "}
          <FaGithub></FaGithub> Login With Github
        </Button>
      </div>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            {" "}
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-3 ms-3 w-100  h-100">
        <img className="position-absolute " src={bgImg} alt="" />
        <div className="position-relative me-5 w-75 text-light p-5 mt-5">
          <h1 className="">Create an Amazing Newspaper</h1>
          <p>
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
