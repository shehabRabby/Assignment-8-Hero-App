import React, { useEffect, useState } from 'react';
import dwnld from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";


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

const Installation = () => {
    const [installApp,setInstallApp] = useState([]);
    const [sortOrder, setSortOrder] = useState("none");


    useEffect(()=>{
        const savedApp =JSON.parse(localStorage.getItem("installList"));
        if(savedApp) {setInstallApp(savedApp);}
    },[])


    // sorting function 
    const sortedItem = (() => {
    if (sortOrder === "asc") {
      return [...installApp].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "desc") {
      return [...installApp].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installApp;
    }
  })();

//   uninstall Function 
  const handleRemoveFromWishlist = (id) => {
    const existingList = JSON.parse(localStorage.getItem("installList"));
    let updatedList = existingList.filter((p) => p.id !== id);

    setInstallApp(updatedList);

    localStorage.setItem("installList", JSON.stringify(updatedList));
    alert("Ready To Uninstall!");
  };


    return (
        <div className='bg-[#d2d2d21a]'>
            <div className="container mx-auto">

           <section className='text-center py-20'>
            <h1 className='font-bold text-4xl text-gray-900 font-serif'>Your Installed Apps</h1>
            <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
           </section>

          
          {/* sort section  */}
          <section className='flex items-center justify-between mt-25'>
             <h1 className='text-gray-900 font-semibold text-xl'>{sortedItem.length} Apps Found</h1>

            <label className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-medium text-gray-700">
              <span className="text-sm sm:text-base">Sort by Downloads:</span>
              <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-500 bg-white text-gray-800 shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <option value="none">Default</option>
                <option value="asc">Low → High</option>
                <option value="desc">High → Low</option>
              </select>
           </label>
          </section>


            <section className='py-20'>
               { sortedItem.map(p=>
                 <div key={p.id} className="flex flex-col sm:flex-row justify-between items-center  rounded-lg shadow-sm border border-gray-200 p-4 mt-3 hover:shadow-md transition">
                     {/* image here */}
                     <div className="flex items-center gap-4 w-full sm:w-auto">
                          <img src={p.image} alt={p.title} className="h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-md bg-gray-200"/>
                            
                            
                          {/* Stats here*/}
                          <div>
                               <p className="text-gray-800 font-semibold text-sm sm:text-base">{p.title}</p>
                               <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                                 <div className="flex items-center gap-1 text-green-500">
                                   <img src={dwnld} alt="downloads" className="w-4 h-4" />
                                   <span>{formatDownloads(p.downloads)}</span>
                                 </div>
                     
                                 <div className="flex items-center gap-1 text-orange-500">
                                   <img src={star} alt="rating" className="w-4 h-4" />
                                   <span>{p.ratingAvg.toFixed(1)}</span>
                                 </div>
                                 <p className="text-gray-500">{p.size} MB</p>
                               </div>
                           </div>
                     </div>
            
            
                     {/* Uninstall Button here */}
                     <button  onClick={() => handleRemoveFromWishlist(p.id)} className="mt-3 sm:mt-0 bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-1.5 rounded-lg transition-all">Uninstall</button>
                 </div>  
                )
                }
            </section>

        </div>
        </div>
    );
};

export default Installation;