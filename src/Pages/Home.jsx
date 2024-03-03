import Banner from "../Components/Banner";
import Container from "../Components/Container";

const Home = () => {
  const newsCard = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Banner />
      <Container>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {newsCard.map((news, idx) => (
            <div key={idx} className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="Shoes"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
