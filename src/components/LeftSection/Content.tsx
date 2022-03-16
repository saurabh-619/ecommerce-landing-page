import React from "react";
import { FiChevronRight } from "react-icons/fi";

const Content = () => {
  return (
    <div
      className="flex flex-col items-start justify-center"
      style={{ width: "40%", height: "88vh" }}
    >
      {/* Product Name */}
      <h1 className="font-bold text-5xl">
        TIED GREEN <br />
        V-NECK SHIRT
      </h1>
      {/* Price */}
      <h3 className="text-4xl mt-5">$68</h3>
      {/* slogan */}
      <div className="mt-3 app-y-center">
        <p className="text-sm text-gray-600">
          v-neck shirt with lapel collor. Long sleeves with cuffs.
          <br />
          Front tie at hem. Front button closure.
        </p>
        <div className="h-20 w-20 rounded-full bg-red-600 app-center relative bottom-8 left-10">
          <h4 className="font-medium text-sm text-white">ADD</h4>
        </div>
      </div>
      {/* Sizes */}
      <div className="mt-9">
        <h4 className="font-medium">SELECT SIZE</h4>
        <div className="app-y-center mt-4">
          {["S", "M", "L"].map((size, i) => (
            <div
              key={i}
              className={`h-8 w-8 app-center p-2 rounded-full border-2 mr-3 ${
                i === 0 ? "border-gray-400" : "border-gray-200"
              }`}
            >
              <h4 className="font-medium text-xs">{size}</h4>
            </div>
          ))}
          <h4 className="font-medium text-sm text-gray-400">SIZE GUIDE</h4>
        </div>
      </div>
      {/* Images */}
      <div className="app-y-center mt-12">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="mr-2">
            <img src="/images/model.jpg" alt="model" className="h-36 w-24" />
          </div>
        ))}
        <div className="h-24 app-y-center ml-3">
          <FiChevronRight size={22} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Content;
