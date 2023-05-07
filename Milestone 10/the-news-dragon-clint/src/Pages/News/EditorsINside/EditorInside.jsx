import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import first1 from './../../../assets/1.png'
import first2 from './../../../assets/2.png'
import first3 from './../../../assets/3.png'
import { FaCalendarAlt } from 'react-icons/fa';

const EditorInside = () => {
    return (
      <Row xs={1} md={2} lg={3} className="g-4 mt-2">
        <Col>
          <Card>
            <Card.Img variant="top" src={first1} />
            <Card.Body>
              <Card.Title>Insight</Card.Title>
              <Card.Text>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <div className="d-flex mt-4 ">
                <h6 className="mt-1">Sports</h6>{" "}
                <FaCalendarAlt className="text-muted flex-grow-1 mt-2"></FaCalendarAlt>{" "}
                <p className="text-muted">Jan 4, 2022</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={first2} />
            <Card.Body>
              <Card.Title>title Insight</Card.Title>
              <Card.Text>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <div className="d-flex mt-4 ">
                <h6 className="mt-1">Sports</h6>{" "}
                <FaCalendarAlt className="text-muted flex-grow-1 mt-2"></FaCalendarAlt>{" "}
                <p className="text-muted">Jan 4, 2022</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={first3} />
            <Card.Body>
              <Card.Title>Card Insight</Card.Title>
              <Card.Text>
                21 The Most Stylish Wedding Guest Dresses For Spring
              </Card.Text>
              <div className="d-flex mt-4 ">
                <h6 className="mt-1">Sports</h6>{" "}
                <FaCalendarAlt className="text-muted flex-grow-1 mt-2"></FaCalendarAlt>{" "}
                <p className="text-muted">Jan 4, 2022</p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
};

export default EditorInside;