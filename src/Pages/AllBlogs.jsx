import Banner from "../Components/Banner";
import Container from "../Components/Container";
import blogs from "../../public/blogs.json";

const AllBlogs = () => {
    const title = 'All Blogs'
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
            {blogs.blogs.map((blog, idx) => (
              <div key={idx} className="bg-base-100">
                <figure>
                  <img
                    className="rounded md:w-[400px] md:h-[280px]"
                    src={blog.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="my-5">
                  <h2 className="card-title mb-3">{blog.title}</h2>
                  <p>{blog.description}</p>
                  <p className="mt-4">April 12, 2024/{blog.category}</p>
                </div>
              </div>
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
