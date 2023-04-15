"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Header from "@/components/AboutHeaders";
import Tweet from "@/components/Tweet";
import PasteCode from "@/components/PasteCode";
import { GoUnmute, GoMute } from "react-icons/go";
import Image from "next/image";

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
          <Image
            src="/bg/bg-task.jpg"
            alt="Twitter"
            width={1000}
            height={1000}
            className=" absolute w-[100%] h-[200vh] object-cover z-[-99999]  "
          />
          <div>
            <div className="  ">
              <Header />
            </div>
            <div className="flex items-end ">
              <Tweet />
            </div>

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
