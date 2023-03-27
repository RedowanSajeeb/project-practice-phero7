import React from 'react';
import { localStrogaeFunction } from '../../Utilities/Storagebd';
import './mock.css'
const Mock = (props) => {
    const { id, name, price, color } = props.cosmatick;

   const addTocard = (id) =>{
    localStrogaeFunction(id)
    
   }
//    const comment = () => addTocard(id)

    return (
      <div className="product-style ">
        <h1>id: {id}</h1>
        <h4>name: {name}</h4>
        <h2>price: {price}</h2>
        <p>color-{color}</p>
        {/* <button onClick={comment}>Add to/ card</button> */}
        <button onClick={()=>addTocard(id)}>Add to card</button>
      </div>
    );
};

export default Mock;