const TextSlider = () => {
  return (
    <div className="mx-10">
      <div className="carousel w-full">
        <div
          id="item1"
          className="carousel-item text-5xl font-black text-white flex py-20 mx-10 justify-center items-center text-center w-full"
        >
          Shop Smarter, Not Harder: Unveil Your Perfect Find!
        </div>
        <div
          id="item2"
          className="carousel-item text-5xl font-black text-white flex py-20 mx-10 justify-center items-center text-center w-full"
        >
          Satisfy Your Cravings: Indulge in Fashion Bliss!
        </div>
        <div
          id="item3"
          className="carousel-item text-5xl font-black text-white flex py-20 mx-10 justify-center items-center text-center w-full"
        >
          Unbox Joy: Where Every Delivery Feels Like a Gift!
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
      </div>
    </div>
  );
};

export default TextSlider;
