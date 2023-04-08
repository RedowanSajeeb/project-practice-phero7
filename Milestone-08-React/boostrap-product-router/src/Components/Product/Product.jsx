import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useNavigate } from 'react-router-dom';
const Product = ({ product }) => {
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
    } = product;
    // console.log(product);
const navigate  = useNavigate()
    const descriptionc = () =>{
      navigate(`/description/${id}`);

    }
  return (
    <>
      <div className="row col-md-3 mx-auto">
        <Card>
          <Card.Img variant="top" src={images[1]} />
          <Card.Body>
            <Card.Title>Name: {title}</Card.Title>
            <Card.Text>category : {category}</Card.Text>
            <h3>Price: ${price}</h3>
            <h6>rating {rating}</h6>
            <p>stock : {stock}</p>
            <button onClick={descriptionc}>description</button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </div>
    </>
  );
};

export default Product;