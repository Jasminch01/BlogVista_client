const Banner = () => {
  return (
    <div className="realtive">
      <div className="hero bg-[#e6f3ff]">
        <div className="hero-content h-[60vh] flex-col space-x-10 lg:flex-row ps-20">
          <div className="">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="space-y-3 w-[70%]">
            <h1 className="text-5xl font-bold">Spider man jump over the appertment</h1>
            <p className="w-[60%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              dolor soluta similique harum. Exercitationem ut corporis
              perferendis assumenda rem voluptatibus magni pariatur nobis, natus
              obcaecati cumque odit veritatis beatae consequuntur.
            </p>
            <p>March 2, 2024/ trucking</p>
            <button className="py-2 px-3 bg-black text-white rounded-full">Read more</button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Banner;
