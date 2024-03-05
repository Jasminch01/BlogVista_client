import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blog";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";

const RecentBlogs = ({ title }) => {
  const [recentBlogs, setRecentBlogs] = useState([]);
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

  const submit = ({ email }) => {
    console.log(email);
    if (email) {
      toast.success("Thank you for subscribing");
      setIsubscribe(true);
      reset();
    }
  };

  return (
    <div className="mt-10 p-5 md:-p-0">
      <Toaster />
      <hr />
      <p className="text-3xl font-bold my-5">{title}</p>
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center ">
        <div className="w-4/2">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {recentBlogs?.map((blog) => (
              <Blog key={blog._id} blog={blog}></Blog>
            ))}
          </div>
        </div>
        <div className="h-[55vh] bg-[#e6f3ff] rounded flex items-center justify-center">
          <div className="">
            <div className="ml-7">
              <IoMail size={30} />
            </div>
            <div className="card-body">
              <h2 className="text-3xl font-bold">
                Stay Connected, Stay Informed
              </h2>
              <p>
                Stay Updated, Stay Inspired Get the latest updates and exclusive
                content delivered straight to your inbox. Sign up now to stay
                connected and inspired with our newsletter.
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
                    className="text-white flex  items-center  justify-center  gap-2 p-2 rounded bg-green-400 uppercase font-bold"
                  >
                    subscribe <IoIosSend size={20} />
                  </button>
                </form>
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
