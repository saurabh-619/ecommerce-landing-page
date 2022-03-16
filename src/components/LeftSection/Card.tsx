import React from "react";

interface ICardProps {
  imageUrl: string;
  bgColor: string;
}

const Card: React.FC<ICardProps> = ({ imageUrl, bgColor }) => {
  return (
    <div
      className={`w-40 rounded-xl mb-3 flex justify-between shadow-2xl ${bgColor}  overflow-hidden`}
    >
      <div className="left-section flex flex-col items-start justify-center px-4">
        <h4 className="font-normal text-xs text-gray-500">
          Half <br />
          Dome <br />
          Pullover
        </h4>
        <h3 className="font-semibold text-sm mt-3">$87</h3>
      </div>
      <img
        src={imageUrl}
        alt="Product Image"
        className="object-cover"
        style={{ height: "120px", width: "auto" }}
      />
    </div>
  );
};

export default Card;
