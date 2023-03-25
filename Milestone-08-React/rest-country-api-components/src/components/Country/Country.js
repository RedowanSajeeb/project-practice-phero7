import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (
      <div className="coyntry">
        <h1>Country name: {props.name}</h1>
        <p>area{props.area}</p>
        <h4>
          Capital: {props.capital}
          {/* <img src="{'props.flags'}" alt="" /> */}
        </h4>
      </div>
    );
};

export default Country;