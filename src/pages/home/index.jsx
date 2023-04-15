"use client";
import Benefit from "@/components/Benefit";
import Layout from "@/components/Layout";
import HowItWork from "@/components/HowItWork";
import About from "@/components/About";
import Header from "@/components/Header";
import Para from "@/components/Para";
import React, { useEffect, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import Image from "next/image";

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
          <div className=" ">
            {" "}
            <div className="relative">
              <Image
                src="/bg/home.jpg"
                alt="home"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover z-[-91]"
              />
              <Header />
            </div>
            <div className=" ">
              <About />
            </div>
            <div className="">
              <button
                onClick={toggleSound}
                className="fixed z-[99999999] p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
              >
                {isPlaying ? <GoMute /> : <GoUnmute />}
              </button>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
