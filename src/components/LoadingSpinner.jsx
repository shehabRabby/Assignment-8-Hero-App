import React from "react";

const LoadingSpinner = ({count = 8}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6 container mx-auto p-2">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex h-[420px] w-full flex-col gap-4">
          <div className="skeleton h-[250px] w-full"></div>
          <div className="skeleton h-4 w-[250px]"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSpinner;
