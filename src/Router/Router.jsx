import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import AllBlogs from "../Pages/AllBlogs";
import FeaturedBlogs from "../Pages/FeaturedBlogs";
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
        path: "/all-blogs",
        element: (
          <PrivetRoute>
            {" "}
            <AllBlogs />
          </PrivetRoute>
        ),
        loader: () => fetch("https://blog-vista-server.vercel.app/allBlogs"),
      },
      {
        path: "/featured-blogs",
        element: (
          <PrivetRoute>
            {" "}
            <FeaturedBlogs />{" "}
          </PrivetRoute>
        ),
        loader: () => fetch("https://blog-vista-server.vercel.app/featured-blogs"),
      },
      {
        path: "/wishlist",
        element: (
          <PrivetRoute>
            {" "}
            <Wishlist />{" "}
          </PrivetRoute>
        ),
      },
      {
        path: "blog/:id",
        element: (
          <PrivetRoute>
            <BlogDetails />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://blog-vista-server.vercel.app/allBlogs/${params.id}`),
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
