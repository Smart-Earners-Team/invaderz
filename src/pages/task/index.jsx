"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Tweet from "@/components/Tweet";
import PasteCode from "@/components/PasteCode";

export default function Task() {
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
    <>
      <main>
        <Layout>
          <div className="bg-gradient-to-r from-[#373B44] to-[#4286f4] lg:bg-contain w-[100%]  ">
            <Header />
          </div>
          <div className="flex items-end bg-blue-500 ">
            <Tweet />
          </div>

          <div className="mx-auto">
            <PasteCode />
          </div>
          {/* <div className=" bg-bg-img1 w-[100%] h-[85vh]">
            <About />
          </div>
          <div className=" bg-bg-img2 w-[100%] h-[100vh] mt-2">
            <HowItWork />
          </div>
          <div className=" bg-bg-img3 w-[100%] h-[100vh] mt-2">
            <Benefit />
          </div> */}
          <button
            onClick={toggleSound}
            className="fixed p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
          >
            {isPlaying ? "OFF Sound" : "ON Sound"}
          </button>
        </Layout>
      </main>
    </>
  );
}
