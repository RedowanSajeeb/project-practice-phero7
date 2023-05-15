// import React from 'react';
import About from "../About/About";
import LOcationCard from "../LocationCard/LOcationCard";
import Service from "../Service/Service";
import Slider from "../Sider/Slider";
import Features from "./Features/Features";

const Home = () => {
    return (
        <div>
          <Slider></Slider>
          <About></About>
          <Service></Service>
          <Features></Features>
          <LOcationCard></LOcationCard>
        </div>
    );
};

export default Home;