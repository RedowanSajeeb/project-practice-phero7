import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Home = () => {
    const meals = useLoaderData();
    // console.log(meals.meals);
    return (
      <div className="container ">
        <div className="row gx-5  border mt-5 ">
          {meals.meals.map((mal) => (
            <Meal key={mal.idMeal} mal={mal}></Meal>
          ))}
        </div>
      </div>
    );
};

export default Home;