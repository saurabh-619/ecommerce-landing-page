import { AnimationContext } from "@pages/_app";
import React, { useContext } from "react";
import Content from "./Content";
import Model from "./Model";
import PageNumber from "./PageNumber";
import SocialButtons from "./SocialButtons";

const LeftModel: React.FC = () => {
  const { isAnimating } = useContext(AnimationContext);
  console.log({ isAnimating });

  return (
    <div className="flex w-screen px-24" style={{ height: "88vh" }}>
      <Content />
      <Model />
      <PageNumber />
      <SocialButtons />
    </div>
  );
};

export default LeftModel;
