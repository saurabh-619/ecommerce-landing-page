import React, { useContext } from "react";
import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

const RightModel: React.FC = () => {
  const { isAnimating } = useContext(AnimationContext);

  const variants = {
    initial: { opacity: 1, x: 0 },
    final: { opacity: 0, x: "100%", transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      animate={isAnimating ? "final" : "initial"}
      variants={variants}
      className="absolute top-0 right-0 flex flex-col w-1/6 h-screen px-8 pb-8 bg-white border-l-2 border-l-gray-100 app-center"
    >
      <div className="absolute z-30 w-12 h-12 bg-white border border-red-500 rounded-full top-1/2 -left-6 app-center">
        <FiChevronRight size={16} color="red" />
      </div>
      <div className="relative w-full model-img h-2/3">
        <div className="h-full">
          <img
            src="/images/model2-crop.jpg"
            className="relative object-cover h-full left-1/4"
            alt="model 2"
          />
        </div>
        <div className="absolute top-3 left-3">
          <h2
            className="text-transparent text-7xl vertical-writing app-center"
            style={{ WebkitTextStroke: "2px black" }}
          >
            <span className="">SUMMER</span>
            <span>2022</span>
          </h2>
        </div>
      </div>
      <div className="absolute footer bottom-20 app-center">
        <h3 className="mr-2 text-xs font-bold app-cursor">SIZE GUIDE</h3>
        <FiChevronUp size={16} />
      </div>
    </motion.div>
  );
};

export default RightModel;
