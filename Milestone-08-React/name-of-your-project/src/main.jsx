import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: () =>
      fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"),
    children: [
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
