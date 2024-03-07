import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Container from "../Components/Container";
import DataTable from "react-data-table-component";

const FeaturedBlogs = () => {
  const featurd = useLoaderData();
  console.log(featurd);

  const columns = [
    {
      name: "Serial Number",
      selector: (row, idx) => idx + 1,
      sortable: true,
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      center: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
      center: true,
    },
    {
      name: "Author",
      selector: (row) => row.author,
      sortable: true,
      center: true,
    },
    {
      name: "Author Profile",
      cell: row => <img src={row.authorImg} alt={row.name} className="w-10 rounded-full" />,
    },
  ];

  return (
    <div>
      <Banner />
      <Container>
        <div className="my-6">
          <p className="text-3xl font-bold">Featured Top 10 Blogs</p>
          <DataTable columns={columns} data={featurd} className="text-center" />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlogs;
