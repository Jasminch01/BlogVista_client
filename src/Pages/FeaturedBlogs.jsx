import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Container from "../Components/Container";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const featurd = useLoaderData();
  const img = "https://i.ibb.co/dW3ZDMH/Industries-bg.jpg";
  const bannerTitle = "Exploring the World of DIY: Creative Home projects"
  const bannerDescription = "Get inspired to unleash your creativity with easy-to-follow DIY projects for your home, from handmade decor to budget-friendly renovations"


  const columns = [
    {
      name: "Serial Number",
      selector: (row, idx) => idx + 1,
      sortable: true,
      center: true,
      responsive : true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      center: true,
      responsive : true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
      center: true,
      responsive : true,
    },
    {
      name: "Author Profile",
      cell: (row) => (
        <img src={row.authorImg} alt={row.name} className="w-10 rounded-full" />
      ),
      center: true,
    },
  ];

  return (
    <div>
      <Banner img={img} title={bannerTitle} description={bannerDescription} />
      <Container>
        <div className="my-20 overflow-auto">
          <p className="md:text-3xl text-lg font-bold mb-5">Featured Top 10 Blogs</p>
          <DataTable
            columns={columns}
            data={featurd}
            className="text-center"
            theme=""
          />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlogs;
