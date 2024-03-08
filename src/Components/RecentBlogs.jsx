import { IoMail } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const RecentBlogs = ({ title }) => {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState([]);
  const { handleSubmit, reset, register } = useForm();
  const [subscribe, setIsubscribe] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:5000/recentBlogs")
      .then((res) => {
        setRecentBlogs(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categores-cunt")
      .then((res) => {
        setCategoriesCount(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submit = ({ email }) => {
    console.log(email);
    if (email) {
      toast.success("Thank you for subscribing");
      setIsubscribe(true);
      reset();
    }
  };

  return (
    <div className="mt-5 mb-10 px-5 md:p-0">
      <hr />
      <p className="text-3xl font-bold my-10">{title}</p>
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center ">
        <div className="w-4/2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {recentBlogs?.map((blog) => (
              <Blog key={blog._id} blog={blog}></Blog>
            ))}
          </div>
        </div>
        <div className="">
          <div className="">
            <div className="bg-[#e6f3ff] h-[60vh] flex justify-center items-center">
              <div className="card-body ">
                <div className=" mt-5 md:mt-0">
                  <IoMail size={30} />
                </div>
                <h2 className="md:text-3xl text-2xl font-bold">
                  Stay Connected, Stay Informed
                </h2>
                <p>
                  Stay Updated, Stay Inspired Get the latest updates and
                  exclusive content delivered straight to your inbox. Sign up
                  now to stay connected and inspired with our newsletter.
                </p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <form onSubmit={handleSubmit(submit)} className="space-y-3">
                    <input
                      type="email"
                      id="email"
                      {...register("email")}
                      placeholder="Enter Email"
                      className="input input-bordered w-full"
                      required
                    />

                    <button
                      disabled={subscribe}
                      type="submit"
                      className="text-white p-2 rounded bg-green-400 md:uppercase font-bold"
                    >
                      subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card-body">
              <h2 className="text-2xl font-bold text-center uppercase">
                Categories
              </h2>
              <hr />
              <div className="">
                {categoriesCount.map((category) => (
                  <p key={category._id} className="flex justify-between">
                    {category._id.toUpperCase()}{" "}
                    <span>{`(${category.count})`}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RecentBlogs.propTypes = {
  title: PropTypes.string,
};

export default RecentBlogs;
