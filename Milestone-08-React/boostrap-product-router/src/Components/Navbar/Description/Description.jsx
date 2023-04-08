import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Description = () => {
    const params = useLoaderData();
    console.log(params);
    const {
      title,
      description,
      id,
      price,
      discountPercentage,
      images,
      rating,
      category,
      stock,
      thumbnail,
    } = params;
    const navigate = useNavigate()
    const somewhere = ()=>{
        navigate(-1)
    }
    return (
      <Card className="text-center">
        <img className="img-fluid mx-auto md:w-50" src={thumbnail} alt="" />
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Title>{category}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button onClick={somewhere} variant="primary">
            Go somewhere
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    );
};

export default Description;