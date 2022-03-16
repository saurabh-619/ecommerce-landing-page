import React from "react";
import Content from "./Content";
import Model from "./Model";
import PageNumber from "./PageNumber";
import SocialButtons from "./SocialButtons";

const LeftModel: React.FC = () => {
  return (
    <div className="w-screen flex px-24" style={{ height: "88vh" }}>
      <Content />
      <Model />
      <PageNumber />
      {/* absolute btns */}
      <SocialButtons />
    </div>
  );
};

export default LeftModel;
