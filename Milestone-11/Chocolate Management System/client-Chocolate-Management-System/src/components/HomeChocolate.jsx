import { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const HomeChocolate = ({ chocolate }) => {
  // console.log(chocolate);
  const [updatechocolate, setUpdatechocolate] = useState(chocolate);
  const diOutlineDeleteHandel = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Chocolate delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/chocolates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }

            const filanlResult = updatechocolate.filter(
              (result) => result._id !== id
            );
            setUpdatechocolate(filanlResult);
          });
      }
    });
  };
  // -------------------------
  return (
    <div>
      <div className="overflow-x-auto mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Country/Factory</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {updatechocolate.map((ck) => (
              <tr key={ck._id}>
                <td>
                  <img className="h-24" src={ck?.img} alt="" />
                </td>
                <td>{ck?.name}</td>
                <td>{ck?.country}</td>
                <td>{ck?.category}</td>
                <td className="flex gap-5 mt-10">
                  <Link to={`/chocolates/${ck._id}`}>
                    <AiOutlineEdit className="text-3xl radial2  rounded  text-orange-900"></AiOutlineEdit>
                  </Link>
                  <Link onClick={() => diOutlineDeleteHandel(ck._id)}>
                    <AiOutlineDelete className="text-3xl radial2  rounded  text-orange-900"></AiOutlineDelete>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HomeChocolate;
