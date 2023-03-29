import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Ordercard from '../Order-card/Ordercard';
import Product from '../product/Product';
import './Shows.css'
const Shows = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
    const stoardCart =  getShoppingCart();
    console.log(stoardCart);
    },[])
    //! ------------------
const addOnclickTocard = (product) =>{
    // console.log('adddpro',product.id,product)
    const newCart = [...cart,product];
    setCart(newCart);
    addToDb(product.id)

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