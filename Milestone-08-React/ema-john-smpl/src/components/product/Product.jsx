import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const {category,name,seller,price,
        stock,ratings,ratingsCount,img,
        quantity,shipping} = props.product
    return (
        <div className='product-box'>
            <img src={img} alt="" />
            <div className='margin'>
                <h5 className='pro-name'>{name}</h5>
                 <h1 className='price'>Price: ${price}</h1>
                 <div>
                <p>Manufacturer: {seller}</p>
                <p style={{marginTop:'-15px'}}>Rating: {ratings}start</p>
            </div>
            </div>
            <button className='button-card'>Add to Cart</button>
        </div>
    );
};

export default Product;