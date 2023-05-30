import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ordercard from './components/Order-card/Ordercard';
import Product from './components/product/Product';
import Shows from './components/Shows/Shows';
import Mains from './components/Layout/Mains';
import Oders from './components/Layout/Oders';
import ManageInventory from './components/Layout/ManageInventory';
import Login from './components/Layout/Login';
import cartProductLoder from './Loders/CardPRoducts';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mains></Mains>,
    children: [
      {
        path: "/",
        element: <Shows></Shows>,
        loader: () => fetch("http://localhost:3000/productsCount"),
      },
      {
        path: "OrderReview",
        element: <Oders></Oders>,
        loader: cartProductLoder,
      },
      {
        path: "ManageInventory",
        element: <ManageInventory></ManageInventory>,
      },
      {
        path: "Login",
        element: <Login></Login>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
