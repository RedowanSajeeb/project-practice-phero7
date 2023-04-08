import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider, useRouteLoaderData } from "react-router-dom";
import Home from './Components/Home/Home';
import Foods from './Components/FoodsHome/Foods';
import First from './Components/FIrst/First';
import Description from './Components/Navbar/Description/Description';


const router = createBrowserRouter([
  {
    path: "/",
    element: <First></First>,
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "HomeFoods",
        element: <Foods></Foods>,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "description/:descriptionID",
        element: <Description></Description>,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.descriptionID}`),
      },
      {
        path: "*",
        element: (
          <img
            src="https://w7.pngwing.com/pngs/336/743/png-transparent-error-404-404-error.png"
            alt=""
          />
        ),
      },
    ],
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
