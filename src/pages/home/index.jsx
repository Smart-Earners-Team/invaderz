"use client";
import Benefit from "@/components/Benefit";
import Layout from "@/components/Layout";
import HowItWork from "@/components/HowItWork";
import About from "@/components/About";
import Header from "@/components/Header";
import Para from "@/components/Para";
import React, { useEffect, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = new Audio("/homeaudio.mp3");
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
          <div className="bg-gradient-to-r from-[#373B44] to-[#4286f4] ">
            <Header />
          </div>
          <div className="bg-gradient-to-r from-[#4286f4] via-[#6b6b83] to-[#4286f4]">
            <About />
          </div>
          <div className="">
            <button
              onClick={toggleSound}
              className="fixed p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
            >
              {isPlaying ? <GoMute /> : <GoUnmute />}
            </button>
          </div>
        </Layout>
      </main>
    </>
  );
}
