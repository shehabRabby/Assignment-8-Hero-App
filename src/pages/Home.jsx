import React from "react";
import { useLoaderData } from "react-router";
import ProductCart from "../components/ProductCart";
import Trusted from "../components/Trusted";

const Home = () => {
  const products = useLoaderData();
  // console.log(allAppData)
  return (
    <div className='bg-[#d2d2d21a]'>
       <Trusted></Trusted>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 container mx-auto p-2">
        {products.map((product) => (
          <ProductCart key={IDBObjectStore} product={product}></ProductCart>
        ))}
      </div>
    </div>
  );
};

export default Home;
 