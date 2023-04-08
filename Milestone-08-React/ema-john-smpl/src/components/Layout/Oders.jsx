import React from 'react';
import Ordercard from '../Order-card/Ordercard';
import { useLoaderData } from 'react-router-dom';

const Oders = () => {
    const card = useLoaderData();
    return (
      <div className="shows-container">
        <div className="container-product-box">
          <div>
            <h1>pagr{card.length}</h1>
          </div>
        </div>
        <div className="">
          <Ordercard card={card}></Ordercard>
        </div>
      </div>
    );
};

export default Oders;