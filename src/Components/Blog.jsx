import axios from "axios";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const {_id, title, image, description, category } = blog;

  const addWishListHandler = (blog) => {
    axios.post("http://localhost:5000/wishlist", blog)
    .then((res) => {
        console.log(res)
    })
    .catch(error => {
        console.log(error)
    })
  };

  return (
    <Link to={`/blog/${_id}`} className="bg-base-100">
      <figure>
        <img
          className="rounded md:w-[400px] md:h-[280px]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="my-5">
        <h2 className="card-title mb-3">{title}</h2>
        <p>{description}</p>
        <p className="mt-4">April 12, 2024/{category}</p>
      </div>
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
    </Link>
  );
};

Blog.propTypes = {
    blog : PropTypes.object,
}

export default Blog;
