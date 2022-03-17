import { AnimationContext } from "@pages/_app";
import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import Card from "./Card";
import { motion } from "framer-motion";

const Model: React.FC = ({}) => {
  const { isAnimating, hasImageClicked, setIsAnimating } =
    useContext(AnimationContext);

  const circlesVariants = {
    initial: { x: 0, y: 0 },
    final: {
      x: "25vw",
      y: 50,
      transition: { duration: 0.05, type: "spring", damping: 18 },
    },
  };

  const modelVariants = {
    initial: { x: 0 },
    final: {
      x: "22vw",
      transition: { duration: 0.05, type: "spring", damping: 18 },
    },
  };

  const modelChangeVariants = {
    initial: { opacity: [1, 1, 1, 1] },
    final: {
      opacity: [1, 0, 0, 1],
      x: ["22vw", "28vw", "22vw"],
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const btnVariants = {
    initial: { opacity: [1, 1, 1] },
    final: {
      opacity: [0.5, 1, 0],
      transition: { duration: 0.2, type: "spring", damping: 40 },
    },
  };

  return (
    <div
      className="flex items-end justify-start"
      style={{ width: "60%", height: "88vh" }}
    >
      <div className="relative w-2/3">
        {/* Circles */}
        <motion.div
          animate={isAnimating ? "final" : "initial"}
          variants={circlesVariants}
          className="absolute left-0 top-6 app-center"
        >
          <div
            className="absolute top-0 z-20 bg-pink-100 rounded-full left-6"
            style={{ height: "500px", width: "500px" }}
          ></div>
          <div
            className="absolute top-0 z-10 rounded-full -left-0 bg-pink-50"
            style={{ height: "500px", width: "550px" }}
          ></div>
        </motion.div>
        <div className="relative z-30 left-1/4">
          {/* Model Image */}
          <motion.img
            animate={isAnimating || hasImageClicked ? "final" : "initial"}
            variants={!hasImageClicked ? modelVariants : modelChangeVariants}
            src="/images/model.png"
            alt="model"
            className="object-cover w-auto h-3/4"
          />
          {/* Trigger Btn */}
          <motion.div
            animate={isAnimating ? "final" : "initial"}
            variants={btnVariants}
            className="left-0 w-10 h-10 bg-black rounded-full app-center app-center-y-tras app-cursor"
            onClick={() => setIsAnimating((prev) => !prev)}
          >
            <FiPlus size={14} color="white" />
          </motion.div>
          {/* Cards */}
          <div className="absolute flex flex-col right-16 top-12">
            <Card index={1} bgColor="bg-white" imageUrl="/images/purse.png" />
            <Card index={2} bgColor="bg-white" imageUrl="/images/shoes.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
