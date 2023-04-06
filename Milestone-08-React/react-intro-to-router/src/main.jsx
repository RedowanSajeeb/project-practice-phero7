import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router1 = createBrowserRouter([
  {
    path:"/",
    element: <h1>hye Router</h1>,
  },
  {
    path:"/about",
    element: <div>This is about page!!</div>
  },
  {
    path: "/contact",
    element: <div>This is contact page!!</div>

  },
  
]);

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router1}></RouterProvider>
    {/* <RouterProvider router={router}></RouterProvider> */}
  </React.StrictMode>,
)
