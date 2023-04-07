import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Home = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
      <div className="container ">
        <div className="m-5 fs-1">
          <Link className="p-1" to="/about">
            About
          </Link>
          <Link className="p-1" to="/blog">
            Blog
          </Link>
          <Link className="p-1 " to="/contact">
            Contact
          </Link>
        </div>

        <div className="row gx-5  border mt-5 ">
          {meals.products.map((mal) => (
            <Meal key={mal.id} mal={mal}></Meal>
          ))}
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Home;