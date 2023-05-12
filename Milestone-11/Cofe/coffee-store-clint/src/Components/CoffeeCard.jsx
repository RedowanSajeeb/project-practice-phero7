// import React from 'react';
import { AiOutlineEye, AiOutlineDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, chef,  _id, taste, category,  photoXurl } =
    coffee;

  const handlerDelate = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3500/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remainning = coffees.filter((cofe) => cofe._id !== _id);
              setCoffees(remainning);
            }
          });
      }
    });
  };

  return (
    <>
      <div className="card md:card-side mb-5  shadow-xl bg-[#F5F4F1]">
        <figure>
          <img src={photoXurl} alt="Movie" />
        </figure>
        <div className=" flex  items-center justify-between w-full pr-20 pb-6 p-3 ">
          <div>
            <h2 className="card-title">Name: {name}</h2>
            <p>Chef: {chef}</p>
            <p>Category: {category}</p>
            <p>Taste: {taste}</p>
          </div>
          <div className="card-actions justify-end">
            <div>
              <AiOutlineEye className="text-3xl bg-[#D2B48C] text-white rounded w-10 h-10 mb-3"></AiOutlineEye>

              <Link to={`/updateCoffeeShop/${_id}`}>
                <BsPencilSquare className="text-3xl bg-black text-white rounded w-10 h-10 mb-3"></BsPencilSquare>
              </Link>
              <AiOutlineDelete
                onClick={() => handlerDelate(_id)}
                className="text-3xl bg-red-500 text-white rounded w-10 h-10"
              ></AiOutlineDelete>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeCard;