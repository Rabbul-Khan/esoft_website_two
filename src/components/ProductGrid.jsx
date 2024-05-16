import IMAGES from '../assets/Images/Images';

const ProductGrid = () => {
  return (
    <div className="px-5 pt-20 md:px-20">
      <h2 className="pb-10 text-4xl font-bold text-center text-white">
        Product Categories
      </h2>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3 xl:grid-cols-4">
        <div>
          <img
            src={IMAGES.image2}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
        <div>
          <img
            src={IMAGES.image1}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
        <div>
          <img
            src={IMAGES.image2}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
        <div>
          <img
            src={IMAGES.image1}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
        <div>
          <img
            src={IMAGES.image2}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
        <div>
          <img
            src={IMAGES.image1}
            className="w-[400px] h-[200px] object-cover hover:scale-105 transition duration-300 cursor-pointer hover:shadow-lg "
          />
          <p className="p-2 text-lg text-center text-white">Product Name</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
