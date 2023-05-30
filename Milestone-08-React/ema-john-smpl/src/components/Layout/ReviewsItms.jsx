import React from 'react';
import '../css/ReviewsItms.css'
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const ReviewsItms = ({ product, handelremoveFromeCard }) => {
  const { img, name, price, shipping, _id, quantity } = product;
  console.log(product);
  return (
    <div className="ReviewsItms">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="p">
        <h4>{name}</h4>
        <h3>
          Price: <span className="color">${price}</span>
        </h3>
        <h5>
          Shipping Charge : <span className="color">${shipping}</span>
        </h5>
        <h4>
          quantity: <span className="color">{quantity}</span>
        </h4>
      </div>
      <h1 onClick={()=> handelremoveFromeCard(_id)} className="dlt">
        <FontAwesomeIcon className="button" icon={faTrashAlt} />
        
      </h1>
    </div>
  );
};

export default ReviewsItms;