import axios from "axios";
import { Link } from "react-router-dom";

const WishBlog = ({ blog }) => {
  const { title, category, _id, description, image } = blog;

  const removeFromWishList = (id) => {
    axios.delete(`http://localhost:5000/delete-wishlist/${id}`).then((res) => {
      console.log(res.data);
    }).catch(error => {
      console.log(error)
    });
  };

  return (
    <div className="flex gap-5 flex-col md:flex-row items-center">
      <div>
        <img className="rounded max-w-sm max-h-sm" src={image} alt="Shoes" />
      </div>
      <div className="space-y-3">
        <h2 className="card-title mb-3">{title}</h2>
        <p>{description?.slice(0, 200)}</p>
        <p className="font-semibold">Category: {category}</p>
        <div className="space-x-3">
          <Link to={`/blog/${_id}`}>
            <button className="py-2 px-3 bg-black text-white rounded-full">
              Details
            </button>
          </Link>
          <button onClick={() =>removeFromWishList(_id)} className="py-2 px-3 bg-red-500 text-white rounded-full">
            Remove wishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishBlog;
