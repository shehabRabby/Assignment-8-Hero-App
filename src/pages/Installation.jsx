import React, { useState } from 'react';
import dwnld from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import { loadAppList } from '../Utilities/localStorage';
import { ToastContainer,toast } from 'react-toastify';


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
    const [installApp,setInstallApp] = useState(()=>loadAppList());
    const [sortOrder, setSortOrder] = useState("none");

    // when install page empty 
    if(!installApp.length) {
        return  <div className="flex flex-col items-center justify-center h-[80vh] text-center">
                    <img
                      src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGZsaTRscnJ5YjY2Z3hka2d5dmZxam04bmttM2luZ3h6bnY4OXFvNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XbA0Qxe2zW8pO/giphy.gif"
                      alt="Empty State" className="w-48 h-48 mb-6"/>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Installed Apps Yet</h2>
                    <p className="text-gray-500 mb-4">Looks like you haven’t installed any apps. Go explore and add some!</p>
                    <a href="/apps" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">Go to App Page</a>
               </div>
    }

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
    toast("Apps Uninstalling.......!");
  };


    return (
        <div className='bg-[#d2d2d20c]'>
           <div className="container mx-auto min-h-screen">

           <section className='text-center py-20'>
            <h1 className='font-bold text-4xl text-gray-900 font-serif'>Your Installed Apps</h1>
            <small className='text-gray-500'>Explore All Trending Apps on the Market developed by us</small>
           </section>

          
          {/* sort section  */}
          <section className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-10 gap-4 sm:gap-0 px-2">
               <h1 className="text-gray-900 font-semibold text-lg sm:text-xl">
                 {sortedItem.length} Apps Found
               </h1>
             
               {/*Dropdown */}
               <label className="flex flex-col sm:flex-row items-start sm:items-center gap-2 font-medium text-gray-700 w-full sm:w-auto">
                 <span className="text-sm sm:text-base">Sort by Downloads:</span>
                 <select
                   value={sortOrder}
                   onChange={(e) => setSortOrder(e.target.value)}
                   className="mt-1 sm:mt-0 px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-500 bg-white text-gray-800 shadow-sm hover:shadow transition-all duration-200 cursor-pointer w-full sm:w-auto"
                 >
                   <option value="none">Default</option>
                   <option value="asc">Low → High</option>
                   <option value="desc">High → Low</option>
                 </select>
               </label>
           </section>


            <section className='py-10 px-2'>
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
            <ToastContainer></ToastContainer>

        </div>
        </div>
    );
};

export default Installation;