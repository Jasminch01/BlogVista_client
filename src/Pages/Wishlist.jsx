import axios from "axios";
import Container from "../Components/Container";
import WishBlog from "../Components/WishBlog";
// import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import { useQuery } from "@tanstack/react-query";

const Wishlist = () => {
  const { user } = UseAuth();
  const { email } = user;

  const getWishList = async () => {
    const { data } = await axios.get(`http://localhost:5000/wishlist/${email}`);
    return data;
  };

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getWishList(),
  });

  return (
    <div>
      <Container>
        {!users || users.length > 0 ? (
          <div className="mt-20 p-5 md:-p-0">
            <hr />
            <div className="my-20">
              <div className="space-y-5">
                {users.map((blog) => (
                  <WishBlog refetch={refetch} key={blog._id} blog={blog}>
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
