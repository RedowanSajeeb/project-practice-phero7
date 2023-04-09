import React from 'react';
import Ordercard from '../Order-card/Ordercard';
import { useLoaderData } from 'react-router-dom';
import ReviewsItms from './ReviewsItms';
import "../css/Rb.css"
const Oders = () => {
    const card = useLoaderData();
    return (
      <div className="d">
        <div className="">
          <div className="reviw">
            {card.map((pd) => (
              <ReviewsItms product={pd} key={pd.id}></ReviewsItms>
            ))}
          </div>
        </div>
        <div className="">
          <Ordercard card={card}></Ordercard>
        </div>
      </div>
    );
};

export default Oders;