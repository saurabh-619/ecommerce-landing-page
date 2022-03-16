import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";
import { AnimationContext } from "@pages/_app";

const SocialButtons: React.FC = ({}) => {
  const { isAnimating } = useContext(AnimationContext);

  const variants = {
    initial: {
      scale: 1,
      opacity: 1,
    },
    final: {
      scale: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const icons = [
    <FaFacebookF size={17} />,
    <FaInstagram size={17} />,
    <FaTwitter size={17} />,
  ];

  const getSocialIcon = () => (
    <>
      <motion.div
        animate={isAnimating ? "final" : "initial"}
        variants={variants}
        className="p-2 mr-3 border border-gray-200 rounded-lg app-cursor"
      >
        <FaFacebookF size={17} />
      </motion.div>
      <motion.div
        animate={isAnimating ? "final" : "initial"}
        variants={variants}
        className="p-2 mr-3 border border-gray-200 rounded-lg app-cursor"
      >
        <FaInstagram size={17} />
      </motion.div>
      <motion.div
        animate={isAnimating ? "final" : "initial"}
        variants={variants}
        className="p-2 mr-3 border border-gray-200 rounded-lg app-cursor"
      >
        <FaTwitter size={17} />
      </motion.div>
    </>
  );

  return (
    <div className="absolute w-1/4 bottom-8 app-y-center">
      {getSocialIcon()}
    </div>
  );
};

export default SocialButtons;
