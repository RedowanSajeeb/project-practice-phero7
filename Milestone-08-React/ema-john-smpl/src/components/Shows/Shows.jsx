import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Ordercard from '../Order-card/Ordercard';
import Product from '../product/Product';
import './Shows.css'
const Shows = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
// console.log(cart);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
    const stoardCart =  getShoppingCart();
    const savedCart = [];
    // !step-1-getid
    for(const id in stoardCart){
        //!step-2 get the peoduct by using id
      const addedProduct = products.find(product => product.id === id);
    //   console.log(sevedProduct);
    if(addedProduct){
  //! step3 get quntity of product
    const quantity = stoardCart[id];
        addedProduct.quantity  = quantity
        // !step4
        savedCart.push(addedProduct)
    }
    }
    //! step-5!
    setCart(savedCart)
    },[products])
    //! ------------------
const addOnclickTocard = (product) =>{
    // console.log('adddpro',product.id,product)
    // const newCart = [...cart,product];
    // --------------------------
    let newCart = [];
    const exist = cart.find(p => p.id === product.id);
    if(!exist){
        product.quantity = 1
        newCart = [...cart,product]
    }
    else{
        exist.quantity = exist.quantity + 1;
        const remanning = cart.filter(p => p.id !== product.id);
        newCart = [...remanning,exist];
    }
// ---------------------------
    setCart(newCart);
    addToDb(product.id)

}

const handelAllremmoceCardCard=() =>{
  setCart([])
  deleteShoppingCart()
}


    return (
      <div className="shows-container">
        <div className="container-product-box">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addOnclickTocard={addOnclickTocard}
            ></Product>
          ))}
        </div>
        <div>
          <Ordercard
            card={cart}
            handelAllremmoceCardCard={handelAllremmoceCardCard}
          ></Ordercard>
          {/* <h1>shops</h1> */}
        </div>
      </div>
    );
};

export default Shows;