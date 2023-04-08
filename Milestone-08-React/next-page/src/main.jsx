import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import BookDetails from './Components/BookDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: (
      <div>
        4004{" "}
        <button>
          <Link to={"/"}>Go BAck</Link>
        </button>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
