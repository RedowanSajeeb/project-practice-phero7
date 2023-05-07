import { Navigate, createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Categori from "../Pages/Home/categori/Categori";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News/News";
import LogingLayout from "../Layout/LogingLayout";
import Login from "../Pages/Login/Login/Login";
import Regastir from "../Pages/Login/Registar/Regastir";
import PrivateRouts from "./PrivateRouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogingLayout></LogingLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/categori/0"}></Navigate>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Regastir></Regastir>,
      },
    ],
  },
  {
    path: "/categori",
    element: <Main></Main>,
    children: [
      {
        path: "/categori/:id",
        element: <Categori></Categori>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-servar-site-redowansajeeb.vercel.app/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRouts> <News></News></PrivateRouts>,
        loader: ({ params }) =>
          fetch(`https://the-news-dragon-servar-site-redowansajeeb.vercel.app/news/${params.id}`),
      },
    ],
  },
]);
export default router;