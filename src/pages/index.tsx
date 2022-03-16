import type { NextPage } from "next";
import Navbar from "@components/Navbar";
import RightModel from "@components/RightModel";
import LeftModel from "@components/LeftSection/index";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ecommerce site | Landing page</title>
      </Head>
      <Navbar />
      <LeftModel />
      <RightModel />
    </>
  );
};

export default Home;
