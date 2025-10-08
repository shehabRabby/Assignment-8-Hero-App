import React, { useState } from "react";
import useApps from "../hooks/useApps";
import ProductCart from "../components/ProductCart";

const Apps = () => {
    const [search,setSearch] = useState('');
    const { products } = useApps();

    const term = search.trim().toLowerCase();
    const searchProducts = term ? products.filter(product => product?.title?.toLowerCase().includes(term)): products;

  return (
    <div className="bg-[#d2d2d21a] ">

      <div className="container mx-auto text-center py-15">
        <p className="text-2xl font-bold">Our All Applications</p>
        <small className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</small>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3">
            <section className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-bold">
                ({searchProducts.length}) Apps Found
              </h1>
            </section>
          

            <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
              <input value={search} onChange={(e)=>setSearch(e.target.value)}
                type="search"
                placeholder="Search your app name..."
                className="input input-bordered rounded-xl bg-white backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-purple-300 w-full sm:w-64 text-gray-700 placeholder:text-gray-400"/>
              <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none hover:scale-105 transition-transform shadow-md w-full sm:w-auto">
                Search
              </button>
            </div>

       </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 container mx-auto p-2">
        {searchProducts.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Apps;
