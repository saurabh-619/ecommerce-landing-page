import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialButtons: React.FC = () => {
  const icons = [
    <FaFacebookF size={17} />,
    <FaInstagram size={17} />,
    <FaTwitter size={17} />,
  ];

  const getSocialIcon = () =>
    icons.map((icon, i) => (
      <div
        key={i}
        className="rounded-lg border border-gray-200 app-cursor p-2 mr-3"
      >
        {icon}
      </div>
    ));

  return (
    <div className="absolute bottom-8 w-1/4 app-y-center">
      {getSocialIcon()}
    </div>
  );
};

export default SocialButtons;
