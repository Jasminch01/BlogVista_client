import { useLoaderData, useNavigate } from "react-router-dom";
import Container from "./Container";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import UseAuth from "../Hooks/UseAuth";
import UpdateBlogsModal from "./UpdateBlogsModal";

const BlogDetails = () => {
  const { user } = UseAuth({});
  const blog = useLoaderData();
  const {
    _id,
    image,
    description,
    longdescription,
    createdAt,
    title,
    category,
    author,
    authorImg,
    authorEmail,
  } = blog;
  const { handleSubmit, register, reset } = useForm();
  const [comments, setComments] = useState([]);
  const { displayName, email, photoURL } = user;
  const commentSubmit = ({ comment }) => {
    const commentDetails = {
      comment,
      commenter: displayName,
      commenterEmail: email,
      profile: photoURL,
      comment_id: _id,
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
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    if (user) {
      setIsOpen(!isOpen);
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/comments/${_id}`)
      .then((res) => {
        setComments(res.data);
      })
      .then((error) => {
        console.log(error);
      });
  }, [_id]);

  return (
    <div>
      <div className="my-20">
        <Container>
          <hr  className="mb-10"/>
          <div>
            <div className="max-w-4xl mx-auto">
              <p className="text-3xl font-bold my-5">{title}</p>
              <img src={image} alt="" className="w-full" />
            </div>
            <div className="mt-10 max-w-4xl mx-auto">
              <p className="text-justify">
                {description + " " + longdescription}
              </p>
              <p className="font-semibold">Category : {category}</p>
              <p className="font-semibold"> Date : {createdAt?.slice(0, 10)}</p>
              <div className="flex items-center gap-2 my-3">
                <p className="text-lg font-semibold">Author : </p>
                <img
                  src={authorImg}
                  alt="author-profile"
                  className="rounded-full w-7"
                />
                <p className="font-semibold">{author}</p>
              </div>
              {email === authorEmail && (
                <div>
                  <UpdateBlogsModal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    blog={blog}
                  ></UpdateBlogsModal>
                  <button
                    onClick={() => handleOpen(!isOpen)}
                    className="p-2 bg-green-400 text-white font-semibold rounded"
                  >
                    Update Blog
                  </button>
                </div>
              )}
              <div>
                <p className="text-lg font-bold">Comments : </p>
              </div>
              <div className="space-y-3">
                {comments && (
                  <div className="">
                    {comments.map((comment) => (
                      <div
                        key={comment?._id}
                        className="p-3 border border-slate-300 rounded w-96"
                      >
                        <div className="flex items-center gap-2">
                          <img
                            src={comment?.profile}
                            alt="commenter-image"
                            className="w-7 rounded-full"
                          />
                          <p>{comment.commenter}</p>
                        </div>
                        <p className="text-justify">{comment?.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
                {(email === authorEmail) == false && (
                  <div>
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
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
