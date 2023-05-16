// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [booking,setBooking] = useState([])
    const url = `http://localhost:5000/seervice-booking?email=${user?.email}`;
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data => setBooking(data) )

    }, [url])
    console.log(booking);
     const deleteBookingHandel = (id) => {
       const swalWithBootstrapButtons = Swal.mixin({
         customClass: {
           confirmButton: "btn btn-success",
           cancelButton: "btn btn-danger",
         },
         buttonsStyling: false,
       });

       swalWithBootstrapButtons
         .fire({
           title: "Are you sure?",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonText: "Yes, delete it!",
           cancelButtonText: "No, cancel!",
           reverseButtons: true,
         })
         .then((result) => {
           if (result.isConfirmed) {
             fetch(`http://localhost:5000/seervice-booking/${id}`, {
               method: "Delete",
             })
               .then((res) => res.json())
               .then((data) => {
                 if (data.deletedCount > 0) {
                   swalWithBootstrapButtons.fire(
                     "Deleted!",
                     "Your Booking has been deleted.",
                     "success"
                   );
                   const remaining = booking.filter((book) => book._id !== id);
                   setBooking(remaining);
                 }
                //  console.log(data);
                 
               });
           } else if (
             /* Read more about handling dismissals below */
             result.dismiss === Swal.DismissReason.cancel
           ) {
             swalWithBootstrapButtons.fire(
               "Cancelled",
               "Your Booking is safe :)",
               "error"
             );
           }
         });
     };
const bookined = (id) => {
  fetch(`http://localhost:5000/seervice-booking/${id}`, {
    method: "PATCH",
    headers :{
      'content-type': 'application/json'
    },
    body : JSON.stringify({status : 'confirm'})
  })
    .then((res) => res.json())
    .then((data) => {
      if(data.modifiedCount > 0){
        const remaining = booking.filter( book => book._id !== id)
        const updatedBook = booking.find(book => book._id == id)
        updatedBook.status = 'confirm'
        const newBooking = [updatedBook,...remaining]
        setBooking(newBooking)
      }
    });
}
    return (
      <div>
        <h1 className="text-2xl text-center mt-5 mb-5">
          Your Bookings Counts {booking.length}
        </h1>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th> Services Name</th>
                <th>Services Date</th>
                <th> Your email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((book) => (
                <BookingRow
                  key={book._id}
                  booking={book}
                  deleteBookingHandel={deleteBookingHandel}
                  bookined={bookined}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Bookings;