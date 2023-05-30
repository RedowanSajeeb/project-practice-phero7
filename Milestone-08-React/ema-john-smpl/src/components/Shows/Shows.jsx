import React, { useEffect, useState } from "react";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";
import Ordercard from "../Order-card/Ordercard";
import Product from "../product/Product";
import "./Shows.css";
import { useLoaderData } from "react-router-dom";
const Shows = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentpage, setCurrentPage] = useState(0);
  const [itmsProductsparPage, setTtmsProductsparPage] = useState(10);
  const { totalProducts } = useLoaderData();

  const totalPage = Math.ceil(totalProducts / itmsProductsparPage);

  const pageNumber = [...Array(totalPage).keys()];

  console.log(totalProducts);

  // useEffect(() => {
  //   fetch("http://localhost:3000/product")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    const startIndex = currentpage * itmsProductsparPage;
    const endIndex = startIndex + itmsProductsparPage;
    fetch(`http://localhost:3000/product?_start=${startIndex}&_end=${endIndex}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentpage, itmsProductsparPage]);

  useEffect(() => {
    const stoardCart = getShoppingCart();
    const savedCart = [];
    for (const id in stoardCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = stoardCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const addOnclickTocard = (product) => {
    let newCart = [];
    const exist = cart.find((p) => p._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remanning = cart.filter((p) => p._id !== product._id);
      newCart = [...remanning, exist];
    }
    setCart(newCart);
    addToDb(product._id);
  };

  const handelAllremmoceCardCard = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const pageSizeOptions = [5, 10, 15, 20,50];
  const handlePageSizeChange = (e) => {
    const pageSize = parseInt(e.target.value);
    setTtmsProductsparPage(pageSize);
    setCurrentPage(0); // Reset the current page when page size changes
  };

  return (
    <>
      <div className="shows-container">
        <div className="container-product-box">
          {products.map((product) => (
            <Product
              key={product._id}
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
      {/* -----------------------pagination */}
      <div className="">
        <p>Current Page: {currentpage}</p>
        {pageNumber.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
        <select value={itmsProductsparPage} onChange={handlePageSizeChange}>
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Shows;


/*

import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Ordercard from '../Order-card/Ordercard';
import Product from '../product/Product';
import './Shows.css';
import { useLoaderData } from 'react-router-dom';

const Shows = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentpage, setCurrentPage] = useState(0);
  const { totalProducts } = useLoaderData();
  const [itemsPerPage, setItemsPerPage] = useState(10); // Step 1: State variable for items per page
  const totalPage = Math.ceil(totalProducts / itemsPerPage); // Step 4: Calculate total number of pages

  const pageNumber = [...Array(totalPage).keys()];

  useEffect(() => {
    fetch("http://localhost:3000/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
      const addedProduct = products.find((product) => product._id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }

    setCart(savedCart);
  }, [products]);

  const addOnclickTocard = (product) => {
    let newCart = [];
    const exist = cart.find((p) => p._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((p) => p._id !== product._id);
      newCart = [...remaining, exist];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  const handleAllRemoveCard = () => {
    setCart([]);
    deleteShoppingCart();
  };

  const handlePageSizeChange = (e) => {
    const pageSize = parseInt(e.target.value);
    setItemsPerPage(pageSize);
    setCurrentPage(0); // Reset the current page when page size changes
  };

  const startItemIndex = currentpage * itemsPerPage;
  const endItemIndex = startItemIndex + itemsPerPage;
  const paginatedProducts = products.slice(startItemIndex, endItemIndex);

  return (
    <>
      <div className="shows-container">
        <div className="container-product-box">
          {paginatedProducts.map((product) => (
            <Product
              key={product._id}
              product={product}
              addOnclickTocard={addOnclickTocard}
            ></Product>
          ))}
        </div>
        <div>
          <Ordercard
            card={cart}
            handelAllremmoceCardCard={handleAllRemoveCard}
          ></Ordercard>
        </div>
      </div>

      <div className="">
        <p>Current Page: {currentpage}</p>
        <select value={itemsPerPage} onChange={handlePageSizeChange}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        {pageNumber.map((number) => (
          <button key={number} onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        ))}
      </div>
    </>
  );
};

export default Shows;

*/