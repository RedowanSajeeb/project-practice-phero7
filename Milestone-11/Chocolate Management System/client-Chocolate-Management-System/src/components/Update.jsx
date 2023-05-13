import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const update = useLoaderData()
    // console.log(update);
        const {name , _id, img, country, category } = update

    const UpdateHandel = (event) => {
      event.preventDefault();
      const formValue = event.target;
      const name = formValue.name.value;
      const img = formValue.img.value;
      const country = formValue.country.value;
      const category = formValue.category.value;
      const updateChocolateies = { name, img, country, category };
    //   console.log(updateChocolateies);
     
      fetch(`http://localhost:5000/chocolates/${_id}`,{
       method: 'Put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateChocolateies)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            title: "updated successfully",
            text: "you have successfully updated  in mongodb",
            icon: "success",
            confirmButtonText: "Okay",
          });
        }
      })







    };



    return (
      <div className="md:p-20 bg-[#FFFFFF]  bordered border rounded-xl m-5 md:m-10 shadow">
        <div>
          <h1 className=" mx-auto md:w-1/4 text-center h-auto p-3 font-semibold text-white text-2xl flex items-center justify-center radial ">
            Chocolate Management System
          </h1>
        </div>
        <Link to={"/"}>
          <>
            <button className="btn btn-outline  ">-🍫- All Chocolates</button>
          </>
        </Link>
        <hr className="mt-5 mb-4" />
        {/* -------------------------- */}
        <form
          onSubmit={UpdateHandel}
          className="bg-gray-100 bg-opacity-50 md:p-20 p-5 "
        >
          <div>
            <label className="label">
              <span className="label-text">Img</span>
            </label>
            <label className="input-group ">
              <input
              defaultValue={img}
                type="text"
                name="img"
                placeholder="Hot Pink Chocolate"
                className="input w-full  input-bordered "
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <label className="input-group ">
              <input
              defaultValue={name}
                type="text"
                name="name"
                placeholder="Hot Chocolate img url"
                className="input w-full  input-bordered "
              />
            </label>
          </div>
          {/* ------------------ */}
          <div>
            <label className="label">
              <span className="label-text">Country</span>
            </label>
            <label className="input-group ">
              <input
              defaultValue={country}
                type="text"
                name="country"
                placeholder="Enter Country Name"
                className="input w-full  input-bordered "
              />
            </label>
          </div>
          {/* -------------- */}
          <div>
            <label className="block mt-3 mb-2">
              <span className="text-gray-700">Category</span>
            </label>
            <select
            defaultValue={category}
              name="category"
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="premium" defaultValue>
                Premium
              </option>
              <option value="homer">Homer</option>
              <option value="bart">Bart</option>
              <option value="lisa">Lisa</option>
              <option value="maggie">Maggie</option>
            </select>
          </div>

          <button className="btn btn-block bg-[#91572B] mt-6 ">Save</button>
        </form>
      </div>
    );
};

export default Update;