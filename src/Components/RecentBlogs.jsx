import blogs from "../../public/blogs.json";
import { IoIosSend } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import PropTypes from 'prop-types'; 

const RecentBlogs = ({title}) => {
  return (
    <div className="mt-10 p-5 md:-p-0">
        <hr />
      <p className="text-3xl font-bold my-5">{title}</p>
      <div className="flex flex-col-reverse md:flex-row gap-5 justify-center ">
        <div className="w-4/2 ">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {blogs.blogs.slice(0, 4).map((blog, idx) => (
              <div key={idx} className="bg-base-100">
                <figure>
                  <img
                    className="rounded md:w-[400px] md:h-[280px]"
                    src={blog.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="my-5">
                  <h2 className="card-title mb-3">{blog.title}</h2>
                  <p>{blog.description}</p>
                  <p className="mt-4">April 12, 2024/{blog.category}</p>
                </div>
              </div>
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
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter Email"
                    className="input input-bordered w-full"
                    required
                  />

                  <button
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
  title : PropTypes.string,
}

export default RecentBlogs;
