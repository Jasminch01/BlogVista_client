import Banner from "../Components/Banner";
import Container from "../Components/Container";
import RecentBlogs from "../Components/RecentBlogs";

const Home = () => {
  const title = "Recent Blog"
  const bannerTitle = "Unleash Your Creativity: Artistic Inspiration and Ideas"
  const bannerDescription = "Ignite your imagination and tap into your creative potential with inspiring ideas, tips, and resources for artists, writers, and creators of all kinds."
  const img = "https://i.ibb.co/CnXrQnp/jr-korpa-SXq-T0n-r-Zc8-unsplash.jpg"
  return (
    <div>
      <Banner img={img} title={bannerTitle} description={bannerDescription}/>
      <Container>
        <RecentBlogs title={title} />
      </Container>
    </div>
  );
};

export default Home;
