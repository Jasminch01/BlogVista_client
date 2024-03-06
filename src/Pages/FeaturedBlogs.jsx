import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Container from "../Components/Container";
// import Blog from "../Components/Blog";
import { DataType } from "ka-table/enums";
import "ka-table/style.css";
import { Table } from "ka-table";

const FeaturedBlogs = () => {
  const featurd = useLoaderData();
  console.log(featurd);

  const dataArray = Array.isArray(featurd)
    ? featurd.map((item, index) => ({
        column1: `${index + 1}`,
        column2: `${item.title}`,
        column3: `${item.category}`,
        column4: `${item.wordCount}`,
        id: item._id,
      }))
    : [];
  // const title = "Featured Blogs"
  return (
    <div>
      <Banner />
      <Container>
        <div className="my-6">
          <p className="text-3xl font-bold">Featured Top 10 Blogs</p>
        </div>
        <div className="my-10">
          <Table
            columns={[
              {
                key: "column1",
                title: "Serial Number",
                dataType: DataType.String,
              },
              {
                key: "column2",
                title: "Blog Title",
                dataType: DataType.String,
              },
              {
                key: "column3",
                title: "Blog Owner",
                dataType: DataType.String,
              },
              {
                key: "column4",
                title: "Blog Owner Profile",
                dataType: DataType.String,
              },
            ]}
            data={dataArray}
            // editingMode={EditingMode.Cell}
            rowKeyField={"id"}
            // sortingMode={SortingMode.Single}
          />
        </div>
      </Container>
    </div>
  );
};

export default FeaturedBlogs;
