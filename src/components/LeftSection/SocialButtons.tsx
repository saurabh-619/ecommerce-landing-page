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
    <FaFacebookF key={Math.random() * 100 + ""} size={17} />,
    <FaInstagram key={Math.random() * 100 + ""} size={17} />,
    <FaTwitter key={Math.random() * 100 + ""} size={17} />,
  ];

  const getSocialIcon = () =>
    icons.map((icon, i) => (
      <motion.div
        key={i}
        animate={isAnimating ? "final" : "initial"}
        variants={variants}
        className="p-2 mr-3 border border-gray-200 rounded-lg app-cursor"
      >
        {icon}
      </motion.div>
    ));

  return (
    <div className="absolute w-1/4 bottom-8 app-y-center">
      {getSocialIcon()}
    </div>
  );
};

export default SocialButtons;
