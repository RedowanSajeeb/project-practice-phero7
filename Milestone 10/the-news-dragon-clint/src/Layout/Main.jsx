import React from "react";
import Header from "../Pages/Sheard/Header";
import Footer from "../Pages/Sheard/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNavbar from "../Pages/Sheard/LeftNavbar";
import RightNavbar from "../Pages/Sheard/RightNavbar";
import { Outlet } from "react-router-dom";
import NavigationNav from "../Pages/Sheard/NavigationNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <NavigationNav></NavigationNav>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNavbar></LeftNavbar>
          </Col>
          <Col lg={6}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNavbar></RightNavbar>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
