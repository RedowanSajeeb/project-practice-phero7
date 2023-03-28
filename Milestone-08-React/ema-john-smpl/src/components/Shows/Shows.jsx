import React, { useEffect, useState } from 'react';
import Ordercard from '../Order-card/Ordercard';
import Product from '../product/Product';
import './Shows.css'
const Shows = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    //! ------------------
const addOnclickTocard = (product) =>{
    // console.log('adddpro',product.id,product)
    const newCart = [...cart,product];
    setCart(newCart);

}
    return (
        <div className='shows-container'>
            <div className='container-product-box'>
                {
                    products.map(product =>
                        <Product
                        key={product.id}

                        product={product}
                        
                        addOnclickTocard={addOnclickTocard}
                        ></Product>

                        )
                }
            </div>
            <div>
                <Ordercard card={cart}></Ordercard>
            </div>
            
        </div>
    );
};

export default Shows;