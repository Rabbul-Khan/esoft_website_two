import React from 'react';

const ProductGrid = () => {
  return (
    <div className="pt-20 px-5 md:px-20">
      <h2 className="text-center font-bold text-4xl text-white pb-10">
        Product Categories
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
        <div>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-[400px] h-[200px]"
          />
          <p className="text-center text-white text-lg p-2">Product Name</p>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
