// import React from 'react';

import { useEffect, useState } from "react";
import Card from "./Card";

const Service = () => {
  const [service, setService] = useState([]);
  // console.log(service);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
      <div className="text-center mt-10">
        <h6 className="text-xl font-bold text-red-500">Service</h6>
        <h2 className="text-4xl font-bold mt-2">Our Service Area</h2>
        <p className="w-1/2 mx-auto mt-4 text-slate-600">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-14 mb-10 md:gap-5">
        {service.map((serie) => (
          <Card key={serie._id} service={serie}></Card>
        ))}
      </div>
      <div className="mx-auto text-center mb-3">
        <button className="btn btn-outline text-red-600  ">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Service;
