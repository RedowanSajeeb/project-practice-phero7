import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
      <div className="container mt-5">
        {/* <Navbar></Navbar> */}
        <img
          className="img-fluid"
          src="https://www.cleveland.com/resizer/HCKV5a0q26C07Ab0IQPv8p3MtT0=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/GRUNLD5NARHL3F5O5D3X35DIMU.png"
          alt=""
        />
        {/* <Outlet></Outlet> */}
      </div>
    );
};

export default Home;