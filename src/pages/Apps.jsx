import React, { useState } from "react";
import useApps from "../hooks/useApps";
import ProductCart from "../components/ProductCart";
import { Link } from "react-router";
import error404 from "../../assets/App-Error.png"
import LoadingSpinner from "../components/LoadingSpinner";

const Apps = () => {
  const { products, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
    }, 500);
  };

  const term = search.trim().toLowerCase();
  const searchProducts = term? products.filter((p) => p.title.toLowerCase().includes(term)): products;

  return (
    <div className="bg-[#d2d2d23a] min-h-screen py-15">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-bold">Our All Applications</p>
        <small className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions.</small>
      </div>

      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-3">
        <section className="text-center sm:text-left">
          <h1 className="text-lg sm:text-xl font-bold"> ({searchProducts.length}) Apps Found</h1>
        </section>

        <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
          <input value={search} onChange={handleSearch} type="search" placeholder="Search your app name..."
            className="input input-bordered rounded-xl bg-white focus:border-purple-500 focus:outline-none w-full sm:w-64 placeholder:text-purple-400"
          />
          <button className="btn bg-gradient-to-b from-[#632EE3] to-[#9F62F2] text-white border-none hover:scale-105 transition-transform shadow-sm w-full sm:w-auto">
            Search
          </button>
        </div>
      </div>

      

      {loading ? (
        <LoadingSpinner count={16} />
      ) : searching ? (
       //search loading
        <div className="flex flex-col items-center justify-center h-[70vh] space-y-6">
          <div className="w-16 h-16 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
          <p className="text-center text-3xl sm:text-4xl font-bold text-[#520e52]">Searching Apps.........</p>
        </div>
      ) : term && searchProducts.length === 0 ? (
        
        // data not matching then show this part
        <div className="flex flex-col items-center justify-center text-center h-[60vh] text-gray-500 font-medium gap-4">
          <img src={error404} alt="Error Massage" />
          <Link to="/" className="btn bg-gradient-to-r from-[#1a011b] to-[#806e99] text-white border-none hover:scale-105 transition-transform shadow-md">
            Go to Home
          </Link>
        </div>

      ) : (
        // matched data show here 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 container mx-auto p-2">
          {searchProducts.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Apps;
