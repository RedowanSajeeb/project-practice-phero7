import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SinUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Booking/Bookings";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout/:id",
        element: <PrivateRouts><Checkout></Checkout></PrivateRouts>,
        loader: ({params}) =>
          fetch(`https://car-doctor-server-redowansajeeb.vercel.app/service/${params.id}`),
      },
      {
        path: "/bookings",
        element: <PrivateRouts> <Bookings></Bookings></PrivateRouts>
      }
    ],
  },
]);

export default router;