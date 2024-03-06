import { useLoaderData } from "react-router-dom";
import Container from "./Container";

const BlogDetails = () => {
  const blog = useLoaderData();
  console.log(blog);
  const {
    image,
    description,
    longdescription,
    createdAt,
    title,
    category,
  } = blog;
  console.log(image);
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
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogDetails;
