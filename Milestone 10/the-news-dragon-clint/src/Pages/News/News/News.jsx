import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInside from "../EditorsINside/EditorInside";

const News = () => {
  const newsdata = useLoaderData();
  const {
    id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
    category_id,
  } = newsdata;
  console.log(title);
  return (
    <div className="mt-3">
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/categori/${category_id}`}>
            <Button className="bg-danger">
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <h4 className="mt-4 mb-1">Editors Insight</h4>
      <EditorInside></EditorInside>
    </div>
  );
};

export default News;
