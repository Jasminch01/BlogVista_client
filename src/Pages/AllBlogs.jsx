import Banner from "../Components/Banner";
import Blog from "../Components/Blog";
import Container from "../Components/Container";
import { useLoaderData } from "react-router-dom";

const AllBlogs = () => {
  const title = "All Blogs";
  const blogs = useLoaderData();
  console.log(blogs)
  return (
    <div>
      <Banner />
      <Container>
        <div className="mt-10 p-5 md:-p-0">
          <hr />
          <p className="text-3xl font-bold my-5">{title}</p>
          <div className="">
            <div className="w-4/2 ">
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                {blogs.map((blog) => (
                  <Blog key={blog?._id} blog={blog}>
                  </Blog>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AllBlogs;
