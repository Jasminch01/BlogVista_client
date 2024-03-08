import { useForm } from "react-hook-form";
import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Container from "../Components/Container";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";

const AllBlogs = () => {
  const title = "All Blogs";
  const blogs = useLoaderData();
  const { register, handleSubmit, reset } = useForm();
  const [categoryList, setCategoryList] = useState([]);
  const {loading, } = UseAuth()
  const img = "https://i.ibb.co/F4f5J0d/pexels-julia-m-cameron-4144294.jpg"
  const bannerTitle = "Unleash Your Creativity: Artistic Inspiration and Ideas"
  const bannerDescription = "Ignite your imagination and tap into your creative potential with inspiring ideas, tips, and resources for artists, writers, and creators of all kinds."

  console.log(loading)

  useEffect(() => {
    setCategoryList(blogs);
  }, [blogs]);

  const sarchByCategory = ({ search }) => {
    const category = search.toLowerCase();
    console.log(category);
    axios
      .get(` https://blog-vista-server.vercel.app/allBlogs/category?category=${category}`)
      .then((res) => {
        setCategoryList(res.data);
        console.log(res.data);
      })
      .then((error) => {
        console.log(error);
      });
    reset();
  };

  console.log(categoryList);

  return (
    <div>
      <Banner img={img} title={bannerTitle} description={bannerDescription} />
      <Container>
        <div className="mt-10 p-5 md:-p-0">
          <form
            onSubmit={handleSubmit(sarchByCategory)}
            className="flex justify-center my-5 gap-3"
          >
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                id="search"
                {...register("search")}
                className="grow"
                placeholder="Search by category"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button
              type="submit"
              className="py-2 px-3 bg-black text-white rounded-lg font-semibold"
            >
              Search
            </button>
          </form>

          <hr />
          <p className="text-3xl font-bold my-5">{title}</p>
          <div className="">
            <div className="w-4/2 ">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {categoryList.map((blog) => (
                  <Blog key={blog?._id} blog={blog}></Blog>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs;
