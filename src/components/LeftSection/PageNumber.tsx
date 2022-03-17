import React, { useContext } from "react";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

const PageNumber = () => {
  const { isAnimating } = useContext(AnimationContext);
  const variants = {
    initial: { opacity: 0 },
    final: { opacity: 1, transition: { delay: 0.55, duration: 0.4 } },
  };

  const heightVariants = {
    initial: { opacity: 0, scale: 0 },
    final: {
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.4 },
    },
  };

  return (
    <div className="absolute z-40 right-16 bottom-1/4">
      <div className="flex flex-col items-center justify-between">
        <motion.div
          animate={isAnimating ? "final" : "initial"}
          variants={variants}
          className="text-5xl font-light"
        >
          01
        </motion.div>
        <motion.div
          animate={isAnimating ? "final" : "initial"}
          variants={heightVariants}
          className="h-24 w-0.5 bg-gray-400 mt-5"
        ></motion.div>
        <motion.div
          animate={isAnimating ? "final" : "initial"}
          variants={variants}
          className="mt-5 text-lg font-normal"
        >
          05
        </motion.div>
      </div>
    </div>
  );
};

export default PageNumber;
