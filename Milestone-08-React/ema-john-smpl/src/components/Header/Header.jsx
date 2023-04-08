import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar-header'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='navbar'> 
                <NavLink to="/">Shop</NavLink>
             <NavLink to="/OrderReview">Order Review</NavLink>
             <NavLink to="/ManageInventory">Manage Inventory</NavLink>

              <NavLink to="/Login">Login</NavLink>
            </div>
        </nav>
    );
};

export default Header;