import React from "react";
import { Link, useLoaderData } from "react-router";
import ProductCart from "../components/ProductCart";
import Trusted from "../components/Trusted";
import useApps from "../hooks/useApps";
import LoadingSpinner from "../components/LoadingSpinner";


const Home = () => {
  
  const {products, loading, error} = useApps()
  const featuredProduct = products.slice(0,8)
//  #d2d2d21a
  return (
    <div className='bg-[#d2d2d23a]'>
      <Trusted></Trusted>
      
      {
        loading ? <LoadingSpinner></LoadingSpinner> :
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 container mx-auto p-2">
        {featuredProduct.map((product) => (
          <ProductCart key={product.id} product={product}></ProductCart>
        ))}
      </div>

      }


      <div className="container mx-auto text-center pb-10">
        <Link to='/apps' className="text-white px-10 py-2 bg-gradient-to-b from-[#632EE3] to-[#9F62F2] shadow-xl rounded">Show All</Link>
      </div>

    </div>
  );
};

export default Home;
 