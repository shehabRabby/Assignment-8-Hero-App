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
        <div className=''>
            <div className='border-1 p-4 bg-white shadow-sm'>
                <img src={image} alt="app icon" className='h-[316px] w-full rounded'/>
                    <p className="text-xl font-semibold text-gray-800 tracking-tight my-1">{title}</p>
                <div className='flex justify-between my-2'>
                    <span className='text-green-500 bg-green-200 flex items-center gap-1 p-1 px-2 rounded'>
                        <i class="fa-solid fa-arrow-down"></i>
                        <p>{formatDownloads(downloads)}</p>
                    </span>
                    <span className='text-orange-600 bg-orange-200 flex items-center gap-1 p-1 px-2 rounded'>
                        <i class="fa-solid fa-star"></i>
                        <p>{ratingAvg.toFixed(1)}</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;