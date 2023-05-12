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
    loader: () => fetch("http://localhost:3500/coffee"),
  },
  {
    path: "addCoffeeShop",
    element: <AddCoffeShop></AddCoffeShop>,
  },
  {
    path: "updateCoffeeShop/:id",
    element: <UpdateCoffeShop></UpdateCoffeShop>,
    loader: ({params}) => fetch(`http://localhost:3500/coffee/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
