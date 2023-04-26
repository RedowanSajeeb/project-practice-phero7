import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./componesnts/Main.jsx";
import Home from "./componesnts/Home.jsx";
import Login from "./componesnts/Layout/Login.jsx";
import Register from "./componesnts/Layout/Register.jsx";
import RegisterRBoostrap from "./componesnts/Layout/RegisterRBoostrap.jsx";
import BootstrapRegister from "./componesnts/Bootstrap/BootstrapRegister.jsx";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/registerRBoostrap",
        element: <RegisterRBoostrap></RegisterRBoostrap>,
      },
      {
        path: "/bootstrap-register",
        element: <BootstrapRegister></BootstrapRegister>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
