import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopulerBlogs = () => {
  const [populer, setPopuler] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allBlogs`)
      .then((res) => {
        setPopuler(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [populer]);

  console.log(populer);

  return (
    <div className="px-5 md:p-0 my-10">
      <p className="text-3xl font-bold mb-5">Populer Blogs</p>
      <div className="flex flex-col md:flex-row gap-3">
        {populer.slice(0, 5).map((blog) => (
          <Link to={`blog/${blog._id}`} key={blog._id} className="md:w-[300px]">
            <img
              src={blog.image}
              alt=""
              className=" w-full h-[200px] rounded"
            />
            <p className="text-lg font-medium">{blog.title}</p>
            <p>{blog.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopulerBlogs;
