import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../Product/Product';

const Foods = () => {
    const data = useLoaderData();
    // console.log(data);
    return (
      <div className="row gap-4 mt-5  ">
        {/* <h1>foods</h1>  */}
        {data.products.map((product) => (
          <Product product={product} key={product.id}></Product>
        ))}
      </div>
    );
};

export default Foods;