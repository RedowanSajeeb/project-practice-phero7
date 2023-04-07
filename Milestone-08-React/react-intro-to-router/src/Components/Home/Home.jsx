import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
      <div>
        <Header></Header>
        <h1>Thiss is Home!</h1>
        <div>{navigation.state === "loading" ? "loading" : ""}</div>
        <Outlet></Outlet>
      </div>
    );
};

export default Home;