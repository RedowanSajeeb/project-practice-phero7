import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
const Meal = ({ mal }) => {
    // console.log(mal);
    const { title, images, id, thumbnail } = mal;
const navigate = useNavigate()
    const buttionClick =()=>{
        navigate(`/id/${id}`)
    }
  return (
  
    <Card className="m-3 mx-auto" style={{ width: "18rem" }}>
      <Card.Img className="img-fluid" variant="top" src={images[0]} />
      <Card.Body>
        <Card.Title className='mb-5'>{title}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button onClick={buttionClick} className="position-absolute bottom-0" variant="primary">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Meal;