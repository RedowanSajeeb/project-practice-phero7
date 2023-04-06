import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <h1>Thiss is Home!</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;