import React, { useEffect, useState } from 'react';
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
            <div>
                <h1>shows-coming{products.length}</h1>
            </div>
            <div>
                <h4>Order Summary</h4>
            </div>
            
        </div>
    );
};

export default Shows;