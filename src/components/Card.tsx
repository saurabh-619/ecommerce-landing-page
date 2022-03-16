import React from "react";

interface ICardProps {
  name: string;
  price: string;
  imageUrl: string;
}

const Card: React.FC<ICardProps> = ({ name, price, imageUrl }) => {
  return <div>Card</div>;
};

export default Card;
