import React, { useContext } from "react";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

interface IContentProps {}

const Content: React.FC<IContentProps> = () => {
  const { isAnimating, setHasImageClicked } = useContext(AnimationContext);

  const textParentVariants = {
    initial: {},
    final: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const textChildVariants = {
    initial: { y: 30, opacity: 0 },
    final: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const sizeParentVariants = {
    initial: {},
    final: {
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.15,
        ease: "easeInOut",
      },
    },
  };

  const sizeChildVariants = {
    initial: { y: 20, opacity: 0, scale: 0.5 },
    final: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  const imgParentVariants = {
    initial: {},
    final: {
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const imgDivChildVariants = {
    initial: { x: 30, opacity: 0 },
    final: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
      },
    },
  };

  const imgChildVariants = {
    initial: { x: 30, scale: 1.5 },
    final: {
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        damping: 40,
      },
    },
  };

  const addBtnVariants = {
    initial: { opacity: 0, scale: [0, 0, 0] },
    final: {
      opacity: 1,
      scale: [1, 1.2, 1],
      transition: {
        delay: 4,
        duration: 0.5,
        type: "spring",
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-start justify-center"
      style={{ width: "40%", height: "88vh" }}
      animate={isAnimating ? "final" : "initial"}
      variants={textParentVariants}
    >
      {/* Product Name */}
      <div>
        <motion.h2
          initial={{ y: 150, opacity: 1 }}
          variants={{ ...textChildVariants, initial: { y: 150, opacity: 1 } }}
          className="text-5xl font-bold"
        >
          TIED GREEN
        </motion.h2>
        <motion.h2
          initial={{ y: 150, opacity: 1 }}
          variants={{ ...textChildVariants, initial: { y: 150, opacity: 1 } }}
          className="mt-2 text-5xl font-bold"
        >
          V-NECK SHIRT
        </motion.h2>
      </div>
      {/* Price */}
      <motion.h3
        initial={textChildVariants.initial}
        variants={textChildVariants}
        className="mt-5 text-4xl"
      >
        $68
      </motion.h3>
      {/* slogan */}
      <motion.div className="mt-3 app-y-center">
        <motion.p
          initial={textChildVariants.initial}
          variants={textChildVariants}
          className="text-sm text-gray-600"
        >
          v-neck shirt with lapel collor. Long sleeves with cuffs.
          <br />
          Front tie at hem. Front button closure.
        </motion.p>
        {/* ADD btn */}
        <motion.div
          initial="initial"
          animate={isAnimating ? "final" : "initial"}
          variants={addBtnVariants}
          className="relative w-20 h-20 bg-red-600 rounded-full app-center bottom-8 left-10"
        >
          <h4 className="text-sm font-medium text-white">ADD</h4>
        </motion.div>
      </motion.div>
      {/* Sizes */}
      <div className="mt-9">
        <motion.h4
          initial={textChildVariants.initial}
          variants={textChildVariants}
          className="font-medium"
        >
          SELECT SIZE
        </motion.h4>
        <motion.div
          initial="initial"
          variants={sizeParentVariants}
          animate={isAnimating ? "final" : "initial"}
          className="mt-4 app-y-center"
        >
          {["S", "M", "L"].map((size, i) => (
            <motion.div
              key={i}
              variants={sizeChildVariants}
              className={`h-8 w-8 app-center p-2 rounded-full border-2 mr-3 ${
                i === 0 ? "border-gray-400" : "border-gray-200"
              }`}
            >
              <h4 className="text-xs font-medium">{size}</h4>
            </motion.div>
          ))}
          <motion.h4
            variants={sizeChildVariants}
            className="text-sm font-medium text-gray-400"
          >
            SIZE GUIDE
          </motion.h4>
        </motion.div>
      </div>
      {/* Images */}
      <motion.div
        initial="initial"
        animate={isAnimating ? "final" : "initial"}
        variants={imgParentVariants}
        className="mt-12 app-y-center"
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            variants={imgDivChildVariants}
            className="mr-2 overflow-hidden app-cursor hover:scale-150"
            key={i}
          >
            <motion.img
              variants={imgChildVariants}
              src="/images/model.jpg"
              alt="model"
              className="w-24 h-36 img-options"
              onClick={() => {
                setHasImageClicked(true);
                setTimeout(() => {
                  setHasImageClicked(false);
                }, 1100);
              }}
            />
          </motion.div>
        ))}
        <motion.div
          variants={imgDivChildVariants}
          className="h-24 ml-3 app-y-center"
        >
          <FiChevronRight size={22} className="text-gray-400 app-cursor" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Content;
