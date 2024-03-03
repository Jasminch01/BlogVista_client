import Banner from "../Components/Banner";
import Container from "../Components/Container";

const Home = () => {
  const newsCard = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <Banner />
      <Container>
        <div className="flex flex-col-reverse md:flex-row gap-5 justify-center mt-10 p-5 md:-p-0">
          <div className="w-4/2 ">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              {newsCard.map((news, idx) => (
                <div key={idx} className="bg-base-100">
                  <figure>
                    <img
                      className="rounded"
                      src="https://i.ibb.co/J5RLcQ9/brooke-lark-n-TZOILVZu-Og-unsplash.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="my-5">
                    <h2 className="card-title mb-3">
                      The Art of Minimalism: Simplify Your Life
                    </h2>
                    <p>
                      Learn how embracing minimalism can bring clarity, focus,
                      and contentment to your life, from decluttering your space
                      to prioritizing what truly matters.
                    </p>
                    <p className="mt-4">April 12, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="">
            <div className="card bg-[#e6f3ff] h-screen">
              <div className="card-body">
                <h2 className="card-title">
                  The Art of Minimalism: Simplify Your Life
                </h2>
                <p>
                  Learn how embracing minimalism can bring clarity, focus, and
                  contentment to your life, from decluttering your space to
                  prioritizing what truly matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
