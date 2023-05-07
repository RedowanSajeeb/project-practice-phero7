import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first1 from "./../../assets/1.png";
import first2 from "./../../assets/2.png";
import first3 from "./../../assets/3.png";
import { FaCalendarAlt } from 'react-icons/fa';

const LeftNavbar = () => {
    const [categories,setCategories] = useState([]);
    useEffect(()=>{
        fetch("https://the-news-dragon-servar-site-redowansajeeb.vercel.app/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
      <div className="mt-2">
        <h4>All Caterogy</h4>
        <div className="mt-3 ps-4">
          {categories.map((categori) => (
            <div className="mt-3" key={categori.id}>
              <Link
                className="text-decoration-none text-secondary mt-5"
                to={`/categori/${categori.id}`}
              >
                {categori.name}
              </Link>
            </div>
          ))}
        </div>
        <div>
          <Row xs={1} md={1} lg={1} className="g-5 mt-2">
            <Col>
              <Card>
                <Card.Img variant="top" src={first1} />
                <Card.Body>
                  <Card.Title>
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                  </Card.Title>
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
                  <Card.Title>
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                  </Card.Title>
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
                  <Card.Title>
                    Bayern Slams Authorities Over Flight Delay to Club World Cup
                  </Card.Title>
                  <div className="d-flex mt-4 ">
                    <h6 className="mt-1">Sports</h6>{" "}
                    <FaCalendarAlt className="text-muted flex-grow-1 mt-2"></FaCalendarAlt>{" "}
                    <p className="text-muted">Jan 4, 2022</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default LeftNavbar;