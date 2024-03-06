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
import BlogDetails from "../Components/BlogDetails";

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
        loader: () => fetch("http://localhost:5000/allBlogs"),
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
        loader: () => fetch("http://localhost:5000/featured-blogs"),
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        loader: () => fetch("http://localhost:5000/wishlist"),
      },
      {
        path: "blog/:id",
        element: (
          <PrivetRoute>
            <BlogDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allBlogs/${params.id}`),
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
