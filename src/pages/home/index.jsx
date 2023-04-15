"use client";

import Layout from "@/components/Layout";

import About from "@/components/About";
import Header from "@/components/Header";

import React, { useEffect, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../../utils/motion";
import { TitleText } from "@/components/CustomTexts";

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
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: "false", amount: 0.25 }}
          >
            {" "}
            <div className="relative">
              <Image
                src="/bg/home.jpg"
                alt="home"
                width={1000}
                height={1000}
                className="absolute top-0 left-0 w-full h-full object-cover z-[99]"
              />
              <Header />
            </div>
            <div className=" z-[] ">
              <About />
            </div>
            <div className="">
              <button
                onClick={toggleSound}
                className="fixed z-[103] p-3 m-3 text-white border-2 rounded-md hover:bg-gray-700 bottom-2 right-5 "
              >
                {isPlaying ? <GoMute /> : <GoUnmute />}
              </button>
            </div>
            <motion.div
              variants={slideIn("left", "tween", 0.2, 5)}
              className="z-[105] absolute lg:w-[20%] w-[70%] left-0 lg:top-[280px] top-[150px]  "
            >
              <TitleText
                title={
                  <Image
                    src="/sides/about2.png"
                    alt="ghost"
                    width={1000}
                    height={1000}
                    className=" opacity-60  "
                  />
                }
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
}
