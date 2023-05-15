// import React from 'react';

const Card = ({ service }) => {
    const  { title, img, price } = service
  return (
    <div className="card h-96 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-72" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions items-center justify-between bottom-0 ">
          <div className=" font-bold badge-outline text-red-500 text-xl">
            {" "}
            price : {price}
          </div>
          <div className=" badge-outline">
            <img
              className="h-10"
              src="https://www.freeiconspng.com/thumbs/red-arrow-png/red-arrow-png-23.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;