"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Tweet from "@/components/Tweet";
import PasteCode from "@/components/PasteCode";
import { GoUnmute, GoMute } from "react-icons/go";

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

          <button
            onClick={toggleSound}
            className="fixed p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
          >
            {isPlaying ? <GoMute /> : <GoUnmute />}
          </button>
        </Layout>
      </main>
    </>
  );
}
