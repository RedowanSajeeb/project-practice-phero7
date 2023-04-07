import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';


// const router1 = createBrowserRouter([
//   {
//     path: "/",
//     element: <h1>hye Router</h1>,
//     errorElement: <Error></Error>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <h1>hye Router0</h1>,
//   },
//   {
//     path:"/about0",
//     element: <div>This is about page0!!</div>
//   },
//   {
//     path: "/contact0",
//     element: <div>This is contact page0!!</div>

//   },

// ])

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
    ],
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <RouterProvider router={router1}></RouterProvider> */}
  </React.StrictMode>,
)
