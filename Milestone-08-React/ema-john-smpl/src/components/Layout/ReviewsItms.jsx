import React from 'react';
import '../css/ReviewsItms.css'

const ReviewsItms = ({product}) => {
    const { img, name, price, shipping, id, quantity } = product;
    console.log(product);
    return (
      <div className="ReviewsItms">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="p">
          <h4>{name}</h4>
          <h5>Price:${price}</h5>
          <h6>Shipping Charge : ${shipping}</h6>
          <p>quantity: {quantity}</p>
        </div>
      </div>
    );
};

export default ReviewsItms;