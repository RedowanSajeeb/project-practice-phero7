import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';

const First = () => {
   const navigation = useNavigation();
    return (
      <div className="container mt-5">
        <Navbar></Navbar>
        <div>
         { navigation.state === "loading" ? "loading" : ""}
          
          </div>
        <Outlet></Outlet>
      </div>
    );
};

export default First;