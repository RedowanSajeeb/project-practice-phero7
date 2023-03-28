import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shows.css'
const Shows = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shows-container'>
            <div className='container-product-box'>
                {
                    products.map(product =>
                        <Product
                        key={product.id}

                        product={product}
                        >

                        </Product>
                        )
                }
            </div>
            <div>
                <h4>Order Summary</h4>
            </div>
            
        </div>
    );
};

export default Shows;