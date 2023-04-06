import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <div style={{ gap: "5px" }}>
        <Link to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/contact`}>contact</Link>
      </div>
    );
};

export default Header;