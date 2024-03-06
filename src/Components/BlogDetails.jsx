import { useLoaderData } from "react-router-dom";
import Container from "./Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";

const BlogDetails = () => {
  const { user } = UseAuth();
  const blog = useLoaderData();
  const { image, description, longdescription, createdAt, title, category } =
    blog;

  const { handleSubmit, register, reset } = useForm();
  const [comments, setComments] = useState([]);
  const { displayName, email, photoURL } = user;

  const commentSubmit = ({ comment }) => {
    const commentDetails = {
      comment,
      commenter: displayName,
      commenterEmail: email,
      profile: photoURL,
    };
    axios
      .post("http://localhost:5000/comment-blogs", commentDetails)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    reset();
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/comments")
      .then((res) => {
        setComments(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {/* <Banner /> */}
      <div className="my-20">
        <Container>
          <div>
            <div className="max-w-4xl mx-auto">
              <p className="text-3xl font-bold my-5">{title}</p>
              <img src={image} alt="" className="" />
            </div>
            <div className="mt-10 max-w-4xl mx-auto">
              <p className="text-justify">
                {description + " " + longdescription}
              </p>
              <p>{longdescription.length}</p>
              <p className="font-semibold">Category : {category}</p>
              <p className="font-semibold"> Date : {createdAt?.slice(0, 10)}</p>
              <div>
                <p className="text-lg font-bold">Comments</p>
              </div>
              <div className="space-y-3">
                {comments && (
                  <div>
                    {comments.map((comment) => (
                      <div key={comment?._id}>
                        <p>{comment?.comment}</p>
                        <div className="flex items-center gap-2 mt-3">
                          <img src={comment?.profile} alt="" className="w-7 rounded-full"/>
                          <p>{comment.commenter}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <p className="font-semibold">Leave a Comments</p>
                <form action="" onSubmit={handleSubmit(commentSubmit)}>
                  <textarea
                    className="border rounded px-3 py-2"
                    name="comment"
                    id="comment"
                    cols="50"
                    rows="5"
                    {...register("comment")}
                  ></textarea>
                  <div className="mt-2">
                    <button
                      type="submit"
                      className="px-3 py-2 bg-black rounded-full text-white"
                    >
                      comment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
