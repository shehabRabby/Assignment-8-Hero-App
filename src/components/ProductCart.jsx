import React from 'react';



const formatDownloads = (num) => {
  if (num >= 1000000000) return Math.floor(num / 1000000000) + "B";
  if (num >= 1000000) return Math.floor(num / 1000000) + "M";
  if (num >= 1000) return Math.floor(num / 1000) + "K";
  return num;
};

const ProductCart = ({product}) => {
    const { image, title, companyName, id, description, size, reviews, ratingAvg, downloads } = product;
    return (
        <div>
           <div className="rounded-xl p-4 bg-white shadow-md hover:shadow-lg transition-all duration-300 w-full h-[420px] flex flex-col">
              <div className="h-[250px] w-full overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt="app banner"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between mt-3">
                <p className="text-lg font-semibold text-gray-800">
                  {title}
                </p>
            
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 bg-green-100 flex items-center gap-1 p-1 px-2 rounded-md text-sm">
                    <i className="fa-solid fa-arrow-down"></i>
                    <p>{formatDownloads(downloads)}</p>
                  </span>
                  <span className="text-orange-600 bg-orange-100 flex items-center gap-1 p-1 px-2 rounded-md text-sm">
                    <i className="fa-solid fa-star"></i>
                    <p>{ratingAvg.toFixed(1)}</p>
                  </span>
                </div>
              </div>
           </div>
        </div>
    );
};

export default ProductCart;