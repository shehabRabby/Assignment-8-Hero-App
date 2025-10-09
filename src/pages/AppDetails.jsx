import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useApps from "../hooks/useApps";
import dwnld from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import liked from "../../assets/icon-review.png";
import error404 from "../../assets/App-Error.png"
import { ToastContainer, toast } from 'react-toastify';
import { Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart} from "recharts";


const AppDetails = () => {
  const { id } = useParams();
  const { products, loading, error } = useApps();
  const [isInstalled,setIsInstalled] = useState(false);
  const product = products.find((p) => p.id === parseInt(id));

  useEffect(()=>{
    const installList = JSON.parse(localStorage.getItem("installList")) || [];
    const installed = installList.some((p) => p.id === product?.id);
    setIsInstalled(installed);
  },[product?.id])


  // app details loading spinner  
   if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
        <p className="ml-10 text-3xl font-bold text-[#520e52] animate-pulse">
          Loading App Details............
        </p>
      </div>
    );
  }

  //wrong path spinner
  if (!product) {
    return (
      <div className="flex justify-center items-center h-[80vh]text-lg flex-col space-y-4 pt-15 animate-pulse">
        <img src={error404} alt="Error Massage"/>
        <p className="text-center text-5xl font-bold text-[#6b1e4b]">Path</p>    
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

  // localStore handle here 
  const handleToInstallation = () => {
     const existingList = JSON.parse(localStorage.getItem("installList")) || [];
      let updatedList = [];

      if(existingList)
        {
          const isDuplicate = existingList.some(p=> p.id === product.id)
          if(isDuplicate){
              return toast("Apss Already Installed")
          }
          updatedList = [...existingList,product];
        }
      else
        {
          updatedList.push(product);
        }

    localStorage.setItem('installList',JSON.stringify(updatedList))
    setIsInstalled(true);
    toast("Apps Installing...")
  }


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
          
          {/* install button abale disable */}
         <section className="text-center sm:text-left mt-3">
            <button onClick={handleToInstallation}  disabled={isInstalled}
              className={`border px-6 py-2 rounded font-semibold transition ${
                isInstalled
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-gradient-to-t from-[#1ebf33] to-[#64dc4c] text-white hover:opacity-90"
              }`}
            >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
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

      <ToastContainer></ToastContainer>

    </div>
  );
};

export default AppDetails;
