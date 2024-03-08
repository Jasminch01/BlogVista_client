import Container from "./Container";

const Banner2 = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center md:h-[20vh] relative"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="bg-black bg-opacity-60 p-4 h-full"></div>
        <div className="absolute inset-0">
          <Container>
            <p className="text-green-500 md:text-5xl text-lg font-bold md:mt-28 md:ml-10 ml-5">
                BlogVista
            </p>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
