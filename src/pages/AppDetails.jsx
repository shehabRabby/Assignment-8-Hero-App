import React from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import dwnld from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import liked from "../../assets/icon-review.png";
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart} from "recharts";


const AppDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useApps();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-500 text-lg">
        Loading product details....
      </div>
    );
  }

  const { image, title, description, size, reviews, ratingAvg, downloads} = product || {};

    const chartData = product.ratings.map((r) => ({
        star: r.name, 
        count: r.count,
    }));
  

  const formatDownloads = (num) => {
    if (num >= 1000000000) return Math.floor(num / 1000000000) + "B";
    if (num >= 1000000) return Math.floor(num / 1000000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "K";
    return num;
  };

  const formatReviews = (num) => {
    if (num >= 1000000000) return Math.floor(num / 1000000000) + "B";
    if (num >= 1000000) return Math.floor(num / 1000000) + "M";
    if (num >= 1000) return Math.floor(num / 1000) + "K";
    return num;
  };

  return (
    <div className="container mx-auto px-4">
      <div className="border-b border-gray-200 flex flex-col sm:flex-row gap-6 sm:gap-8 py-6">
        <div className="w-full sm:w-1/5 flex justify-center sm:justify-start">
          <img src={image} alt="aps image" className="w-32 sm:w-full rounded-md object-cover shadow-xl"/>
        </div>

        <div className="w-full">
          <section className="mb-4 text-center sm:text-left">
            <p className="text-lg sm:text-xl font-bold text-gray-900 font-sans">{title}</p>
            <small className="text-gray-600"> Developed by{" "}
              <a href="#" className="font-medium text-purple-600">productive.io</a>
            </small>
          </section>

          <div className="border-b border-gray-200 mb-2"></div>

          <section className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-6 sm:gap-12 my-4 text-center sm:text-left">
            <div>
              <img src={dwnld} alt="download image" className="mx-auto sm:mx-0"/>
              <small className="text-gray-500">Downloads</small>
              <p className="font-extrabold text-xl"> {formatDownloads(downloads)}</p>
            </div>

            <div>
              <img src={star} alt="star image" className="mx-auto sm:mx-0" />
              <small className="text-gray-500">Average Ratings</small>
              <p className="font-extrabold text-xl">{ratingAvg.toFixed(1)}</p>
            </div>

            <div>
              <img src={liked} alt="like image" className="mx-auto sm:mx-0" />
              <small className="text-gray-500">Total Reviews</small>
              <p className="font-extrabold text-xl">{formatReviews(reviews)}</p>
            </div>
          </section>

         {/* install button  */}
          <section className="text-center sm:text-left mt-3">
            <button className="border px-6 py-2 bg-gradient-to-t from-[#1ebf33] to-[#64dc4c] text-white rounded font-semibold hover:opacity-90 transition">
              Install Now ({size} MB)
            </button>
          </section>
        </div>
      </div>
      

      {/* barchart  */}
      <div className="w-full h-96 my-10 px-3">
        <section><p className="text-xl font-bold my-4">Ratings</p></section>
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical">
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="star" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
       </ResponsiveContainer>
      </div>

      {/* description  */}
      <div className="my-10 p-3">
        <section>
          <p className="text-xl font-semibold">Description:</p>
          <small className="text-sm font-normal">{description}</small>
        </section>
      </div>

    </div>
  );
};

export default AppDetails;
