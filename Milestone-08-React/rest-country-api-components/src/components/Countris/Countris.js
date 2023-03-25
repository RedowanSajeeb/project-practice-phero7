import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countris = () => {
    const [countris,setCountris] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then( data => setCountris(data))

    },[])
    return (
      <div>
        {/* <h1>coun{countris.length}</h1> */}
        {countris.map((country) => (
          <Country
          cCountry ={country}
            // name={country.name.common}
            // area={country.area}
            // capital={country.capital}
            // src={country.flags.png}
          ></Country>
        ))}
      </div>
    );
};

export default Countris;