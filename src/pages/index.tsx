import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import RightModel from "@components/RightModel";
import LeftModel from "@components/LeftSection/index";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <LeftModel />
      <RightModel />
    </>
  );
};

export default Home;
