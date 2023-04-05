"use client";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";

import React, { useEffect, useState } from "react";

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
        <div className="sticky flex justify-between p-12 px-[60px] top-0 ">
          <div>
            <Image
              src="/invadersLogo.jpg"
              alt="bg"
              width={500}
              height={500}
              className="w-[10%] z-[999999999] "
            />
          </div>
          <div className="flex items-center justify-between gap-5 text-2xl text-white">
            <Link href="/home">Home</Link>
            <Link href="/task">WhiteList</Link>
            <Link href="/mint">Mint</Link>
          </div>
        </div>
        <p className="mx-auto mt-5 text-6xl text-center text-white ">
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
          {isPlaying ? "OFF Sound" : "ON Sound"}
        </button>
      </div>
    </Layout>
  );
};

export default Mint;
