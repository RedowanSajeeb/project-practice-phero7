import React from 'react';

const Mock = (props) => {
    const { id, name, price, color } = props.cosmatick;
   
    return (
      <div>
        <h1>id: {id}</h1>
        <h4>name: {name}</h4>
        <h2>price: {price}</h2>
        <p>color-{color}</p>
      </div>
    );
};

export default Mock;