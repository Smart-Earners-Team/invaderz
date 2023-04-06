"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Autour_One } from "next/font/google";
import Navbar from "@/components/Navbar";
import { GoUnmute, GoMute } from "react-icons/go";
const authour = Autour_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Mint = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio("/otheraudio.mp3");
    audio.loop = true;
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  const toggleSound = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <Layout>
      <div className="bg-gradient-to-r from-[#373B44] to-[#4286f4] bg-center bg-contain ">
        <Navbar />
        <p
          className={` ${authour.className} mx-auto mt-5 lg:text-9xl text-5xl text-center text-white `}
        >
          Coming Soon
        </p>
        <div className=" flex flex-col lg:pt-[100px] pt-10 text-white p-5 text-xl   lg:px-[80px]">
          <span className=" lg:max-w-[300px] text-center lg:mt-[30px]">
            Be the first to know when we launch our minting page by following us
            on Twitter
          </span>
          <div className="bg-blue-900 rounded-lg mx-auto lg:ml-[50px] p-5 px-10 w-fit m-5">
            Follow
          </div>
        </div>
        <button
          onClick={toggleSound}
          className="fixed p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
        >
          {isPlaying ? <GoMute /> : <GoUnmute />}
        </button>
      </div>
    </Layout>
  );
};

export default Mint;
