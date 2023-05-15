// import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Home/Home/Sheard/Footer/Footer';
import Navbar from '../Pages/Home/Home/Sheard/NavBar/Navbar';
import { ToastContainer } from 'react-toastify';

const Main = () => {
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;
  {
    /* Same as */
  }
  <ToastContainer />;
    return (
      <div>
        <div className="max-w-7xl  mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;