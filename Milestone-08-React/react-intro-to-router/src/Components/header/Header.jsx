import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css'
import ActiveLink from '../AcriveLink/ActiveLink';
const Header = () => {
    return (
      <nav className="hadder" style={{ gap: "5px" }}>
        <ActiveLink  to={`/`}>Home</ActiveLink>
        <ActiveLink to={`/about`}>About</ActiveLink>
        <ActiveLink to={`/contact`}>contact</ActiveLink>
        <ActiveLink to={`/friends`}>friends</ActiveLink>
        <ActiveLink to={'/post'}>Post</ActiveLink>
       {/*  <Link  to={`/`}>Home</Link>
        <Link to={`/about`}>About</Link>
        <Link to={`/contact`}>contact</Link>
        <Link to={`/friends`}>friends</Link>
        <Link to={'/post'}>Post</Link> */}
        {/* <ActiveLink to={d}></ActiveLink> */}
        
      </nav>
    );
};

export default Header;