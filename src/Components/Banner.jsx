
const Banner = ({img, title, short , description}) => {
  return (
    <div className="realtive">
      <div className="hero bg-[#e6f3ff] md:pt-0 pt-20">
        <div className="flex max-w-[90rem] md:items-center md:justify-center md:h-[60vh] flex-col md:space-x-10 md:flex-row md:p-0 p-5 space-y-3">
          <div className="justify-start">
            <img
              src={img}
              className="w-[500px] rounded-lg "
            />
          </div>
          <div className="md:space-y-3 md:w-[70%]">
            <h1 className="md:text-5xl text-4xl font-bold">
              {title}
            </h1>
            <p className="md:w-[60%]">
             {description}
            </p>
            <p>March 2, 2024/ Health</p>
            <button className=" mt-3 py-2 px-3 bg-black text-white rounded-full">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
