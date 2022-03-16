import React from "react";
import { motion } from "framer-motion";

const PageNumber = () => {
  const variants = {
    initial: { opacity: 0, y: 100 },
    final: { opacity: 0, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      initial="initial"
      animate="final"
      variants={variants}
      className="absolute right-24 bottom-1/4"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="text-5xl font-light">01</div>
        <div className="h-24 w-0.5 bg-gray-200 mt-5"></div>
        <div className="mt-5 text-lg font-normal">05</div>
      </div>
    </motion.div>
  );
};

export default PageNumber;
