import React from 'react';
import Features from '../../features/Features';

const CardPrice = ({ price }) => {
  return (
    <div className="bg-orange-200 pe-2 ps-2 mpe-2 pt-4 pb-3 mt-5 relative">
      <h1 className="text-5xl font-extrabold">
        {price.price}
        <span className="text-sm">/mon</span>
      </h1>
      <h1 className="text-2xl font-bold">{price.name}</h1>
      <p>features:</p>
      {price.features.map((f,idx)=> <Features
      // idx
      key={idx}
      f={f}></Features>)
      }
      <button className='w-full absolute bottom-0 bg-green-600 py-2 px-2 text-white  rounded-md font-bold'>Buy Now</button>
    </div>
  );
};

export default CardPrice;