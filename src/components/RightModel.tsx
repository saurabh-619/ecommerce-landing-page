import React from "react";
import { FiChevronUp, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const RightModel: React.FC = () => {
  const variants = {
    initial: { opacity: 1, x: 0 },
    // final: { opacity: 1, x: 0 },
    final: { opacity: 0, x: "100%", transition: { duration: 2 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="final"
      variants={variants}
      className="absolute h-screen right-0 top-0 w-1/6 bg-white  border-l-2 border-l-gray-100 pb-8 px-8 app-center flex flex-col"
    >
      <div className="absolute top-1/2 -left-6 h-12 w-12 rounded-full border border-red-500 bg-white app-center z-30">
        <FiChevronRight size={16} color="red" />
      </div>
      <div className="model-img relative h-2/3 w-full">
        <div className="h-full">
          <img
            src="/images/model2-crop.jpg"
            className="relative h-full left-1/4 object-cover"
            alt="model 2"
          />
        </div>
        <div className="absolute top-3 left-3">
          <h2
            className="text-7xl vertical-writing text-transparent app-center"
            style={{ WebkitTextStroke: "2px black" }}
          >
            <span className="">SUMMER</span>
            <span>2022</span>
          </h2>
        </div>
      </div>
      <div className="footer absolute bottom-20 app-center">
        <h3 className="text-xs font-bold app-cursor mr-2">SIZE GUIDE</h3>
        <FiChevronUp size={16} />
      </div>
    </motion.div>
  );
};

export default RightModel;
