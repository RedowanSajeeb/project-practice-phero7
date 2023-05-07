import moment from "moment";
import React from "react";
import {  Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiBookmark, BiShareAlt } from "react-icons/bi";
import { FaRegEye, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
const Newscard = ({ news }) => {
  const {
    _id,
    author,
    details,
    image_url,
    rating,
    thumbnail_url,
    title,
    total_view,
  } = news;

  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center ">
        <Image
          style={{ height: "40px" }}
          className=""
          src={author?.img}
          roundedCircle
        />
        <div className="ps-2 mt-3 flex-grow-1">
          <h6 className="mb-0">{author?.name}</h6>
          <p>
            <small>{moment(author?.published_date).format("yyyy-MM-D")}</small>
          </p>
        </div>
        <div className="">
          <BiBookmark />
          <BiShareAlt></BiShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Title>
          {details?.length < 300 ? (
            <p>{details} </p>
          ) : (
            <Card.Title className="mt-5">
              {details?.slice(0, 300)}... <br />{" "}
              <Link
                className="text-danger   text-decoration-none"
                to={`/news/${_id}`}
              >
                Read More
              </Link>
            </Card.Title>
          )}
        </Card.Title>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1 ">
          <Rating
            className="me-2 text-warning -mt-5 "
            placeholderRating={rating?.number}
            emptySymbol={<FaRegStar></FaRegStar>}
            readonly
            placeholderSymbol={<FaStar></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span>{rating?.number}</span>
        </div>
        <div>
          <FaRegEye></FaRegEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default Newscard;
