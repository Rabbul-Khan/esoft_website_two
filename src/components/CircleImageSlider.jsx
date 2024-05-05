const CircleImageSlider = () => {
  return (
    <div className="px-5 md:px-20 flex flex-col gap-10 pt-20">
      <h2 className="text-center font-bold text-4xl text-white">
        Explore Our Products
      </h2>
      <div className="carousel carousel-center w-full">
        <div id="item1" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
        <div id="item2" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
        <div id="item3" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
        <div id="item4" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
        <div id="item5" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
        <div id="item6" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
      </div>

      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
        <a href="#item5" className="btn btn-xs">
          5
        </a>
        <a href="#item6" className="btn btn-xs">
          6
        </a>
      </div>
    </div>
  );
};

export default CircleImageSlider;
