import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

const PageNumber = () => {
  const { isAnimating } = useContext(AnimationContext);
  const variants = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { delay: 2.5, duration: 0.6 } },
  };

  return (
    <motion.div
      animate={isAnimating ? "final" : "initial"}
      variants={variants}
      className="absolute z-40 right-16 bottom-1/4"
    >
      <div className="flex flex-col items-center justify-between">
        <div className="text-5xl font-light">01</div>
        <div className="h-24 w-0.5 bg-gray-400 mt-5"></div>
        <div className="mt-5 text-lg font-normal">05</div>
      </div>
    </motion.div>
  );
};

export default PageNumber;
