import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import RightModel from "@components/RightModel";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <RightModel />
    </>
  );
};

export default Home;
