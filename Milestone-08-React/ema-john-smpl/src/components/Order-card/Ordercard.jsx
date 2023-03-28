import React from 'react';
import './Ordercard.css'

const Ordercard = ({card}) => {
    let totalPrice = 0;
    let shipping = 0;
    for(const product of card){
        totalPrice = totalPrice + product.price;
        shipping = shipping + product.shipping
    }
const text = totalPrice*card.length/100;
const grandTotal = totalPrice + shipping + text;
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h5>Selected Items: {card.length}</h5>
            <h5>Total Price: ${totalPrice}</h5>
            <h5>Total Shipping Charge: ${shipping}</h5>
            <h5>Tax: ${text.toFixed(2)}</h5>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
        </div>
    );
};

export default Ordercard;