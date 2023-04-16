"use client";
import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import { Autour_One, Coming_Soon } from "next/font/google";
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
      <div className="w-full h-screen bg-no-repeat bg-cover bg-bg-mint">
        <Navbar />
        <p
          className={` ${authour.className} mx-auto  lg:text-9xl text-5xl text-center text-white `}
        >
          Coming Soon
        </p>
        <div className=" flex flex-col gap-3 items-center justify-center mt-[50px]  pt-10 text-white p-5 text-xl   ">
          <span className=" max-w-[300px] text-center ">
            Be the first to know when we launch our minting page by following us
            on Twitter
          </span>
          <div className="p-5 px-10 mx-auto mb-16 bg-blue-900 rounded-lg w-fit">
            <a href="https://twitter.com" target="_blank">
              {" "}
              Follow
            </a>
          </div>
        </div>

        <button
          onClick={toggleSound}
          className="fixed z-[99999999] p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
        >
          {isPlaying ? <GoMute /> : <GoUnmute />}
        </button>
      </div>
    </Layout>
  );
};

export default Mint;
