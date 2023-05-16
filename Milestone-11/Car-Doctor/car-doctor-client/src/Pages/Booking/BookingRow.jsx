// import React from 'react';



// import { data } from "autoprefixer";

const BookingRow = ({
  booking,
  deleteBookingHandel,
  bookined,
}) => {
  const { title, date, email, price, img, _id ,status } = booking;

  return (
    <tr>
      <th>
        <button
          onClick={() => deleteBookingHandel(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded-lg w-24 h-24 ">
              {img ? (
                <img src={img} alt="Avatar Tailwind CSS Component" />
              ) : (
                <img src="https://www.aaadubai.com/wp-content/uploads/2021/09/ATF_supermechanic-_img.png" />
              )}
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">{price}</div>
          </div>
        </div>
      </td>
      <td>{date}</td>
      <td>{email}</td>
      <th>
        {status === "confirm" ? (
          <>
            <button
              
              className="btn btn-warning  btn-xs"
            >
              Confirmed
            </button>
          </>
        ) : (
          <button
            onClick={() => bookined(_id)}
            className="btn btn-success btn-xs"
          >
            Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;