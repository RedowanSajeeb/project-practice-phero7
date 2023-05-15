// import React from 'react';
import a from "./../../../../assets/dln/001-timetable.png"
import aa from "./../../../../assets/dln/Group 35.png"
import aaa from "./../../../../assets/dln/Group.png"
const LOcationCard = () => {
    return (
      <div className="grid md:grid-cols-3 md:mb-24 mb-5 ms-5 me-5 p-5 gap-5 md:mt-20 md:mb-20 mt-7 bg-black md:p-14 rounded-lg text-white">
        <div className="flex items-center gap-3">
          <img
            
            src={a}
            alt=""
          />
          <div>
            <h3 className="">We are open monday-friday</h3>
            <h3 className="font-bold text-2xl">7:00 am - 9:00 pm</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
            
            src={aaa}
            alt=""
          />
          <div>
            <h3 className="">Have a question?</h3>
            <h3 className="font-bold text-2xl">+2546 251 2658</h3>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img
          
            src={aa}
            alt=""
          />
          <div>
            <h3 className="">Need a repair? our address</h3>
            <h3 className="font-bold text-2xl">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    );
};

export default LOcationCard;