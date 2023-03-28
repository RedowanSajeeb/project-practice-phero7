import React from 'react';
import Logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar-header'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div className='navbar'> 
                <a href="/Order">Order</a>
                <a href="/Order Review">Order Review</a>
                <a href="/Manage Inventory">Manage Inventory</a>

                <a href="/Login">Login</a>
            </div>
        </nav>
    );
};

export default Header;