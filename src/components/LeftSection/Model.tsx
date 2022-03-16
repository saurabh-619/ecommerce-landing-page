import React from "react";
import { FiPlus } from "react-icons/fi";
import Card from "./Card";

const Model: React.FC = () => {
  return (
    <div
      className="flex items-end justify-start"
      style={{ width: "60%", height: "88vh" }}
    >
      <div className="relative w-2/3">
        {/* Circles */}
        <div className="absolute top-6 left-0 app-center">
          <div
            className="absolute top-0 left-6 rounded-full bg-pink-100 z-20"
            style={{ height: "500px", width: "500px" }}
          ></div>
          <div
            className="absolute top-0 -left-0 rounded-full bg-pink-50 z-10"
            style={{ height: "500px", width: "550px" }}
          ></div>
        </div>
        {/* Model Image */}
        <div className="relative z-30 left-1/4">
          <img
            src="/images/model.png"
            alt="model"
            className="h-3/4 w-auto object-cover"
          />
          <div className="app-center h-10 w-10 rounded-full bg-black left-0 app-center-y-tras app-cursor">
            <FiPlus size={14} color="white" />
          </div>
          <div className="flex flex-col absolute right-16 top-12">
            <Card bgColor="bg-white" imageUrl="/images/purse.png" />
            <Card bgColor="bg-white" imageUrl="/images/shoes.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
