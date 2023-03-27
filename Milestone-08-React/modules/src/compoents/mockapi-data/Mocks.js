import React, { useEffect, useState } from 'react';
import Mock from './Mock';

const Mocks = () => {

    const [cosdatas, setCosdatas] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosdatas(data))
    },[])



    /* const cosdatas = [
      {
        id: "6420e34104b0256567e60a1b",
        price: 180,
        name: "Webster Buck",
      },
      {
        id: "6420e3418283e5774e4fc87c",
        price: 54,
        name: "Bennett Reyes",
      },
      {
        id: "6420e34117e47a0da8ac5d0b",
        price: 209,
        name: "Renee Martin",
      },
      {
        id: "6420e341e205dff430a76340",
        price: 40,
        name: "Joy Castillo",
      },
      {
        id: "6420e34170c870c46e68a5aa",
        price: 183,
        name: "Kerri Shelton",
      },
      {
        id: "6420e34172e6f23a29aa10f7",
        price: 38,
        name: "Tami White",
      },
      {
        id: "6420e341223431e8d38e9677",
        price: 41,
        name: "Miller Baldwin",
      },
    ] */
    
    // [
    //   ({ name: "lipistick", id: 1, price: 306, color: "red" },
    //   { name: "kipistick", id: 2, price: 506, color: "red" },
    //   { name: "cipistick", id: 3, price: 906, color: "red" },
    //   { name: "bipistick", id: 4, price: 1506, color: "red" },
    //   { name: "dipistick", id: 5, price: 306, color: "red" },
    //   { name: "pipistick", id: 6, price: 7506, color: "red" },
    //   { name: "tipistick", id: 7, price: 406, color: "red" },
    //   { name: "mipistick", id: 8, price: 506, color: "red" },
    //   { name: "oipistick", id: 9, price: 506, color: "red" },
    //   { name: "dipistick", id: 10, price: 506, color: "red" })
    // ];
    return (
      <div>
        <h1>Hello Mock Api-Cosmaticks Data</h1>
        {cosdatas.map((cosmatick) => (
          <Mock cosmatick={cosmatick} key={cosmatick.id}></Mock>
        ))}
      </div>
    );
};

export default Mocks;