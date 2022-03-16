import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
  const { isAnimating } = useContext(AnimationContext);

  const topTitleVariant = {
    initial: { y: 150 },
    final: {
      y: 0,
      transition: {
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const bottomTitleVariant = {
    initial: { y: 150 },
    final: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  const parentVariants = {
    initial: {},
    final: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const childVariants = {
    initial: { y: 150 },
    final: {
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  };

  // const priceVariant = {
  //   initial: { y: 150 },
  //   final: {
  //     y: 0,
  //     transition: {
  //       delay: 0.15,
  //       duration: 0.25,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  // const sloganVariant = {
  //   initial: { y: 150 },
  //   final: {
  //     y: 0,
  //     transition: {
  //       delay: 0.15,
  //       duration: 0.25,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <motion.div
      className="flex flex-col items-start justify-center"
      style={{ width: "40%", height: "88vh" }}
      animate={isAnimating ? "final" : "initial"}
      variants={parentVariants}
    >
      {/* Product Name */}
      <motion.div variants={childVariants}>
        <h2
          // variants={topTitleVariant}
          // animate={isAnimating ? "final" : "initial"}
          className="text-5xl font-bold"
        >
          TIED GREEN{" "}
        </h2>
        <h2
          // variants={bottomTitleVariant}
          // animate={isAnimating ? "final" : "initial"}
          className="mt-2 text-5xl font-bold"
        >
          V-NECK SHIRT{" "}
        </h2>
      </motion.div>
      {/* Price */}
      <motion.h3 className="mt-5 text-4xl" variants={childVariants}>
        $68
      </motion.h3>
      {/* slogan */}
      <div className="mt-3 app-y-center">
        <motion.p className="text-sm text-gray-600">
          v-neck shirt with lapel collor. Long sleeves with cuffs.
          <br />
          Front tie at hem. Front button closure.
        </motion.p>
        <motion.div className="relative w-20 h-20 bg-red-600 rounded-full app-center bottom-8 left-10">
          <h4 className="text-sm font-medium text-white">ADD</h4>
        </motion.div>
      </div>
      {/* Sizes */}
      <div className="mt-9">
        <h4 className="font-medium">SELECT SIZE</h4>
        <div className="mt-4 app-y-center">
          {["S", "M", "L"].map((size, i) => (
            <div
              key={i}
              className={`h-8 w-8 app-center p-2 rounded-full border-2 mr-3 ${
                i === 0 ? "border-gray-400" : "border-gray-200"
              }`}
            >
              <h4 className="text-xs font-medium">{size}</h4>
            </div>
          ))}
          <h4 className="text-sm font-medium text-gray-400">SIZE GUIDE</h4>
        </div>
      </div>
      {/* Images */}
      <div className="mt-12 app-y-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div className="mr-2" key={i}>
            <img src="/images/model.jpg" alt="model" className="w-24 h-36" />
          </div>
        ))}
        <div className="h-24 ml-3 app-y-center">
          <FiChevronRight size={22} className="text-gray-400" />
        </div>
      </div>
    </motion.div>
  );
};

export default Content;
