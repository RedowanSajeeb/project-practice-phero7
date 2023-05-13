import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewChockletAdd from './components/NewChockletAdd.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/chocolates"),
  },
  {
    path: "/newChocolate",
    element: <NewChockletAdd></NewChockletAdd>,
  },
  {
    path: "chocolates/:id",
    element: <Update></Update>,
    loader: ({ params }) => fetch(`http://localhost:5000/chocolates/${params.id}`),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
