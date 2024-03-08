import axios from "axios";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import UseAuth from "../Hooks/UseAuth";

const Blog = ({ blog }) => {
  const { user } = UseAuth({});
  const { _id, title, image, description, category, createdAt } = blog;

  const addWishListHandler = (blog) => {
    const data = {
      blog_id: blog._id,
      title: blog.tilte,
      image: blog.image,
      description: blog.description,
      longdescription: blog.longdescription,
      category: blog.category,
      createdAt: blog.createdAt,
      authorEmail : blog.authorEmail,
      author : blog.author,
      userEmail: user.email,
    };
    axios
      .post("http://localhost:5000/wishlist", data)
      .then((res) => {
        if (res.data.acknowledged) {
          toast.success("Successfully added wishlist");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Link to={`/blog/${_id}`} className="bg-base-100">
        <figure>
          <img
            className="rounded md:w-[450px] md:h-[280px]"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="my-5">
          <h2 className="card-title mb-3">{title}</h2>
          <p>{description?.slice(0, 200)}</p>
          <p>
            {createdAt.slice(0, 10)}/{category.toUpperCase()}
          </p>
        </div>
      </Link>
      <div>
        <button
          onClick={() => {
            addWishListHandler(blog);
          }}
          className="text-white bg-black p-3"
        >
          add to wishlist
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
