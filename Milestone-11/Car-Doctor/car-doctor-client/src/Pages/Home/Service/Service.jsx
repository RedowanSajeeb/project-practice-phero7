// import React from 'react';

import { useEffect, useState } from "react";
import Card from "./Card";

const Service = () => {
  const [service, setService] = useState([]);
  const [ass,setAss] = useState(true);
  // console.log(service);
  useEffect(() => {
    fetch(`https://car-doctor-server-redowansajeeb.vercel.app/service?sort=${ass ? "ass" : "dss"}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [ass]);

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

      <div className="md:flex  justify-between md:mt-3">
        <button
          className="btn btn-outline text-red-600  "
          onClick={() => setAss(!ass)}
        >
          {ass ? "Price high to low" : "Price low to high"}
        </button>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* ----------------- */}

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
