import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country.area);
    return (
      <div className="coyntry">
        <h1>Country name: {props.cCountry.name.common}</h1>
        <p>area{props.cCountry.area}</p>
        <h4>
          Capital: {props.cCountry.capital}
          {/* <img src="{'props.flags'}" alt="" /> */}
        </h4>
      </div>
    );
};

export default Country;