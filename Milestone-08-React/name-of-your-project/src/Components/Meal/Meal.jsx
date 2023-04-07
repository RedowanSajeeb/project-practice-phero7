import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const Meal = ({ mal }) => {
    console.log(mal);
    const { strMeal, strMealThumb } = mal;
  return (
    <Card className='m-3' style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
        <Button className='' variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default Meal;