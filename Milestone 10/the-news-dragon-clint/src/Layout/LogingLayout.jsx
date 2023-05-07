import React from 'react';
import NavigationNav from '../Pages/Sheard/NavigationNav';
import { Outlet } from 'react-router-dom';

const LogingLayout = () => {
    return (
        <div>
            <NavigationNav></NavigationNav>
            <Outlet></Outlet>
        </div>
    );
};

export default LogingLayout;