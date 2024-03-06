import { useLoaderData } from "react-router-dom";
import Container from "../Components/Container";
import WishBlog from "../Components/WishBlog";

const Wishlist = () => {
  const wishlist = useLoaderData();
  return (
    <div>
      <Container>
        {!wishlist || wishlist.length > 0 ? (
          <div className="mt-20 p-5 md:-p-0">
            <hr />
            <div className="my-20 h-screen">
              <div className="space-y-5">
                {wishlist.map((blog) => (
                  <WishBlog key={blog._id} blog={blog}>
                    {" "}
                  </WishBlog>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="my-20">
            <div className="flex justify-center items-center h-screen">
              <p className="text-lg text-red-500 font-medium">
                You have not yet added wishlist
              </p>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Wishlist;
