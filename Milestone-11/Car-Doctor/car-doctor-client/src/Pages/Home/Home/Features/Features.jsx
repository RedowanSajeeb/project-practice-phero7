// import React from 'react';
import group from "./../../../../../assets/icons/group.svg";
import check from "./../../../../../assets/icons/check.svg";
import deliveryt from "./../../../../../assets/icons/deliveryt.svg";
import person from "./../../../../../assets/icons/person.svg";
import Wrench from "./../../../../../assets/icons/Wrench.svg";

const Features = () => {
  return (
    <div className="mt-5 md:mt-24">
      <div className="text-center mb-5">
        <h6 className="text-xl font-bold text-red-500">Core Features</h6>
        <h2 className="text-4xl font-bold mt-2">Why Choose Us</h2>
        <p className="w-1/2 mx-auto mt-4 text-slate-600 mb-3">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6   mt-4 mb-10">
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white hover:text-white  rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img className="h-14" src={group} alt="" />
          <h4 className="text-xl font-bold">Expert Team</h4>
        </div>
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img
            className="h-14 text-black"
            src="https://icon-library.com/images/watch-icon-png/watch-icon-png-19.jpg"
            alt=""
          />
          <h4 className="text-xl font-bold">Timely Delivery</h4>
        </div>
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img className="h-14" src={person} alt="" />
          <h4 className="text-xl font-bold">24/7 Support</h4>
        </div>
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img className="h-14" src={Wrench} alt="" />
          <h4 className="text-xl font-bold">Best Equipment</h4>
        </div>
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img className="h-14" src={check} alt="" />
          <h4 className="text-xl font-bold">100% Guranty</h4>
        </div>
        <div className="flex border p-6 ms-3 py-7 ms-3 ms-3 hover:text-white rounded-xl hover:bg-[#FF3811] flex-col items-center justify-center">
          <img className="h-14" src={deliveryt} alt="" />
          <h4 className="text-xl font-bold">Timely Delivery</h4>
        </div>
      </div>
    </div>
  );
};

export default Features;
