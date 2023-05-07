import React from "react";
import Header from "../Pages/Sheard/Header";
import Footer from "../Pages/Sheard/Footer";
import { Col, Container, Row } from "react-bootstrap";
import LeftNavbar from "../Pages/Sheard/LeftNavbar";
import RightNavbar from "../Pages/Sheard/RightNavbar";
import { Outlet } from "react-router-dom";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
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

export default NewsLayout;
