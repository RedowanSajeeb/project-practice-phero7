// import React from 'react';
import Swal from "sweetalert2";

import photo from "./../../public/covebg.png";
import { Link } from "react-router-dom";
const AddCoffeShop = () => {


    const handlerSubForm = (event) =>{
        event.preventDefault();
        const item = event.target;

        const name = item.name.value;
        const chef = item.chef.value;
        const supplier = item.supplier.value;
        const taste = item.taste.value;
        const category = item.category.value;
        const details = item.details.value;
        const photoXurl = item.photoXurl.value;

        const newCoffee = {name, chef, supplier, taste,category, details, photoXurl}
        console.log(newCoffee);

        //  send data to server
        fetch("http://localhost:3500/coffee", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.acknowledged){
               Swal.fire({
                 title: "coffee added successfully",
                 text: "you have successfully added in mongodb",
                 icon: "success",
                 confirmButtonText: "Okay",
               });
            }
          });


    }


    return (
      <div style={{ backgroundImage: `url(${photo})` }}>
        <Link to={"/"}>
          <button className="bt ms-10 md:mt-10 mt-2 btn-warning p-3 rounded">
            Back to home
          </button>
        </Link>
        <div className="md:mx-auto p-10 mt-5 md:w-1/2 bg-[#F4F3F0] md:p-24 ">
          <h2 className="text-2xl font-extrabold mb-33">Add New Coffee</h2>
          <p className="mb-5 mt-5">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handlerSubForm}>
            <>
              {/* name */}
              <div className="md:flex mb-5 gap-x-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Coffee Name</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter coffee name"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Chef</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="chef"
                      type="text"
                      placeholder="Enter coffee chef"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/* Supplier */}
              <div className="md:flex mb-5 gap-x-5">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Supplier</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="supplier"
                      type="text"
                      placeholder="Enter coffee supplier"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Taste</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="taste"
                      type="text"
                      placeholder="Enter coffee taste"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/* Category */}
              <div className="md:flex mb-5 gap-x-5">
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text">Category</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="category"
                      type="text"
                      placeholder="Enter coffee category"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-full">
                  <label className="label">
                    <span className="label-text">Details</span>
                  </label>
                  <label className="input-group">
                    <input
                      name="details"
                      type="text"
                      placeholder="Enter coffee details"
                      className="input input-bordered md:w-full"
                    />
                  </label>
                </div>
              </div>
              {/* Photo */}
              <div className="form-control mb-5 ">
                <label className="label ">
                  <span className="label-text">Photo</span>
                </label>
                <label className="input-group">
                  <input
                    name="photoXurl"
                    type="text"
                    placeholder="Enter photo URL"
                    className="input input-bordered w-full  "
                  />
                </label>
              </div>
              <div className="form-control ">
                <label className="label "></label>
                <label className="input-group">
                  <input
                    type="submit"
                    placeholder="Enter photo URL"
                    value="Add Coffee"
                    className=" btn btn-block  w-full "
                  />
                </label>
              </div>
            </>
          </form>
        </div>
      </div>
    );
};

export default AddCoffeShop;