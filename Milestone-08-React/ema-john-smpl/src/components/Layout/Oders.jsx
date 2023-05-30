import React, { useState } from 'react';
import Ordercard from '../Order-card/Ordercard';
import { useLoaderData } from 'react-router-dom';
import ReviewsItms from './ReviewsItms';
import "../css/Rb.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Oders = () => {
    const card = useLoaderData();


    const [mcart,setMcart] = useState(card);


   const handelremoveFromeCard = (id) =>{

    const remainging = mcart.filter(pid => pid._id !==id)
    setMcart(remainging)
    removeFromDb(id)

   }

const handelAllremmoceCardCard = () =>{
  setMcart([])
  deleteShoppingCart();
}



    return (
      <div className="d">
        <div className="">
          <div className="reviw">
            {mcart.map((pd) => (
              <ReviewsItms
                product={pd}
                key={pd._id}
                handelremoveFromeCard={handelremoveFromeCard}
              ></ReviewsItms>
            ))}
          </div>
        </div>
        <div className="fixd">
          <Ordercard
            card={mcart}
            handelAllremmoceCardCard={handelAllremmoceCardCard}
          ></Ordercard>
          {/* <h1>oders</h1> */}
        </div>
      </div>
    );
};

export default Oders;