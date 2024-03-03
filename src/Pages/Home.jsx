import Banner from "../Components/Banner";
import Container from "../Components/Container";
import RecentBlogs from "../Components/RecentBlogs";

const Home = () => {
  const title = 'Recent Blogs'
  return (
    <div>
      <Banner />
      <Container>
        <RecentBlogs title={title} />
      </Container>
    </div>
  );
};

export default Home;
