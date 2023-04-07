import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
    return (
      <div className="hadder" style={{ gap: "5px" }}>
        <Link  to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/contact`}>contact</Link>
        <Link to={`friends`}>friends</Link>
      </div>
    );
};

export default Header;