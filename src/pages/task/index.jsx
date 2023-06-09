import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoUnmute, GoMute } from "react-icons/go";
import Layout from "@/components/Layout";
import Header from "@/components/AboutHeaders";
import Tweet from "@/components/Tweet";

export default function Home() {
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
          <div className="relative w-full lg:h-[150vh] h-screen overflow-hidden">
            <Image
              src="/bg/bg-task.jpg"
              alt="Ghost"
              layout="fill"
              objectFit="cover"
              className="absolute top-0 left-0 z-[-99999]"
            />
            <div>
              <div className="  ">
                <Header />
              </div>
              <div className="flex items-end lg:mt-20 ">
                <Tweet />
              </div>

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
