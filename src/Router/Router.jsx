import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllBlogs from "../Pages/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import AddBlogs from "../Pages/AddBlogs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Wishlist from "../Pages/Wishlist";
import PrivetRoute from "./PrivetRoute";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-blogs",
        element: <AddBlogs />,
      },
      {
        path: "/all-blogs",
        element: (
          <PrivetRoute>
            {" "}
            <AllBlogs />
          </PrivetRoute>
        ),
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <Register />,
  },
]);

export default Router;
