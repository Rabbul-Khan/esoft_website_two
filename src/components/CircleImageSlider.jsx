import IMAGES from '../assets/Images/Images';

const CircleImageSlider = () => {
  return (
    <div className="flex flex-col gap-10 px-5 pt-20 md:px-20">
      <h2 className="text-4xl font-bold text-center text-white">
        Explore Our Products
      </h2>
      <div className="w-full carousel carousel-center">
        <div id="item1" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src={IMAGES.image2}
            className="w-full rounded-[50%] object-cover"
          />
        </div>
        <div id="item2" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src={IMAGES.image1}
            className="w-full rounded-[50%] object-cover"
          />
        </div>
        <div id="item3" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src={IMAGES.image2}
            className="w-full rounded-[50%] object-cover"
          />
        </div>
        <div id="item4" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src={IMAGES.image1}
            className="w-full rounded-[50%] object-cover"
          />
        </div>
        <div id="item5" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src={IMAGES.image2}
            className="w-full rounded-[50%] object-cover"
          />
        </div>
        <div id="item6" className="carousel-item w-[200px] h-[200px] px-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full rounded-[50%]"
          />
        </div>
      </div>

      <div className="flex justify-center w-full gap-2 py-2">
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
