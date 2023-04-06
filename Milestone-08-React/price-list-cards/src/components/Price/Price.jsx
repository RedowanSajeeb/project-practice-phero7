import CardPrice from "./cardPrice/CardPrice";
import React, { useEffect, useState } from "react";

const Price = () => {
  const [price, setPrice] = useState([]);
  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPrice(data));
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl text-orange-900">price</h1>
      <div className="md:grid md:grid-cols-3   gap-3 md:ms-5">
        {price.map((p) => (
          <CardPrice price={p}></CardPrice>
        ))}
      </div>
    </div>
  );
};

export default Price;
