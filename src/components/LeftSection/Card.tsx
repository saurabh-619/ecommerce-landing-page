import { AnimationContext } from "@pages/_app";
import React, { useContext } from "react";
import { motion } from "framer-motion";

interface ICardProps {
  index: number;
  imageUrl: string;
  bgColor: string;
}

const Card: React.FC<ICardProps> = ({ index, imageUrl, bgColor }) => {
  const { isAnimating, setIsAnimating } = useContext(AnimationContext);
  const cardVariants = {
    initial: { y: 0, opacity: 1, scale: 1 },
    final: {
      y: index === 1 ? 0 : 100,
      opacity: 0,
      scale: 0,
      transition: { delay: index === 1 ? 0.1 : 0, duration: 0.3 },
    },
  };

  return (
    <motion.div
      animate={isAnimating ? "final" : "initial"}
      variants={cardVariants}
      className={`w-40 rounded-xl mb-3 flex justify-between shadow-2xl ${bgColor}  overflow-hidden`}
    >
      <div className="flex flex-col items-start justify-center px-4 left-section">
        <h4 className="text-xs font-normal text-gray-500">
          Half <br />
          Dome <br />
          Pullover
        </h4>
        <h3 className="mt-3 text-sm font-semibold">$87</h3>
      </div>
      <img
        src={imageUrl}
        alt="Product Image"
        className="object-cover"
        style={{ height: "120px", width: "auto" }}
      />
    </motion.div>
  );
};

export default Card;
