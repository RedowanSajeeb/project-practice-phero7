import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './countris.css'
const Countris = () => {
    const [countris,setCountris] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then( data => setCountris(data))

    },[])
    return (
      <div>
        <h1>Hello from Countries {countris.length}</h1>
        <div className="country-containner">
          {countris.map((country) => (
            <Country
              cCountry={country}
              // name={country.name.common}
              // area={country.area}
              // capital={country.capital}
              // src={country.flags.png}
              key={country.cca3}
            
             
             
            ></Country>
          ))}
        </div>
      </div>
    );
};

export default Countris;