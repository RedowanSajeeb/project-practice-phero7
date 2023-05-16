// import React from 'react';
import ShortBannar from '../Home/Home/Sheard/ShortBannar/ShortBannar';

const Service = () => {
  // const {title,price} =  useLoaderData()
  return (
    <div>
      <div>
        <ShortBannar></ShortBannar>
      </div>
      <div className="bg-[#F3F3F3] md:p-14 mb-10 mt-10">
        <div className="card-body">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-control">
              <input
                type="text"
                placeholder="First Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your Phone"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered"
              />
            </div>
          </div>
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered textarea-lg w-full  mt-10 "
          ></textarea>
          <button className="btn btn-outline bg-red-600   text-white ">
            Order Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;