import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCoffeShop from './Components/AddCoffeShop.jsx';
import UpdateCoffeShop from './Components/UpdateCoffeShop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "addCoffeeShop",
    element:<AddCoffeShop></AddCoffeShop>
  },
  {
    path: "updateCoffeeShop",
    element: <UpdateCoffeShop></UpdateCoffeShop>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
