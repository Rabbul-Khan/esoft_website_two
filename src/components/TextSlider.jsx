import IMAGES from '../assets/Images/Images';

const TextSlider = () => {
  return (
    <div className="">
      <div className="w-full carousel">
        <div id="slide1" className="relative w-full carousel-item">
          <img src={IMAGES.image2} className="object-cover w-full max-h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="relative w-full carousel-item">
          <img src={IMAGES.image1} className="object-cover w-full max-h-96" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
