import React from 'react';
import { Link } from 'react-router-dom';
import "../componesnts/Header.css";
const Header = () => {
    return (
      <div>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register</Link>
          <Link to={"/registerRBoostrap"}>Register RBoostrap</Link>
          <Link to={"/bootstrap-register"}>Bootstrap Register</Link>
        </nav>
      </div>
    );
};

export default Header;