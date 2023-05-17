// import React from 'react';

import { useContext } from "react";
import ShortBannar from "../Home/Home/Sheard/ShortBannar/ShortBannar";

import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Checkout = () => {
    const {title,price,_id , img} =  useLoaderData()
    const {user} = useContext(AuthContext)
    const bookServiceFormHandel =(event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const price = form.price.value
        const date = form.date.value
        const email = user?.email
        const message = form.message.value

        // console.log(name, price, date, email, message);
        const booking = {
            name,
            email,
            price: price,
            title: title,
            serviceId: _id,
            date,
            customerMassage: message,
            img,

        }
        console.log(booking);
        fetch("https://car-doctor-server-nine-alpha.vercel.app/seervice-booking",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(booking)
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
                 toast.success("Booking Success");
            }
          });

    }

    return (
      <div>
        <div>
          <ShortBannar></ShortBannar>
        </div>
        <h4 className="text-3xl mt-7 text-center"> Book Service: {title}</h4>
        <form onSubmit={bookServiceFormHandel}>
          <div className="bg-[#F3F3F3] md:p-14 mb-10 mt-10">
            <div className="card-body">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.name}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <input
                    name="price"
                    type="text"
                    placeholder="Due Amount"
                    className="input input-bordered"
                    defaultValue={"$" + price}
                  />
                </div>
                <div className="form-control">
                  <input
                  readOnly
                    name="email"
                    defaultValue={user?.email}
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered"
                  />
                </div>
              </div>
              <textarea
                name="message"
                placeholder="Your Message"
                className="textarea textarea-bordered textarea-lg w-full  mt-10 "
              ></textarea>
              <button className="btn btn-outline bg-red-600   text-white ">
                Order Confirm
                <ToastContainer></ToastContainer>
              </button>
            </div>
          </div>
        </form>
      </div>
    );
};

export default Checkout;