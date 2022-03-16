import React from "react";

const PageNumber = () => {
  return (
    <div className="absolute right-24 bottom-1/4">
      <div className="flex flex-col justify-between items-center">
        <div className="text-5xl font-light">01</div>
        <div className="h-24 w-0.5 bg-gray-200 mt-5"></div>
        <div className="text-lg font-normal mt-5">05</div>
      </div>
    </div>
  );
};

export default PageNumber;
