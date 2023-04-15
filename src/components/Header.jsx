"use client";
import { Autour_One, Coiny } from "next/font/google";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";
import Navbar from "./Navbar";
import Image from "next/image";
import { TitleText } from "./CustomTexts";

const authour = Autour_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const single = Coiny({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
    >
      <Navbar />
      <div className=" flex flex-col lg:pt-[50px] pt-12 lg:pb-[200px]  text-white  px-5 lg:px-[50px] lg:ml-[100px]">
        {/* <motion.div
          variants={slideIn("left", "tween", 0.2, 3)}
          className="relative w-full md:-mt-[20px] -mt[12px] "
        > */}
        <TitleText
          title={<>TheInvaderz</>}
          className={`${authour.className} mb-5 text-2xl font-extrabold lg:text-8xl lg:ml-[10px] shrink-0`}
        />
        <span
          className={`${authour.className} lg:max-w-[500px]   lg:ml-[10px] text-sm `}
        >
          The Invaderz NFT project is a unique and interactive concept that
          places the power of storytelling in the hands of the NFT holders. The
          project consists of a series of NFTs that each represent a different
          character or aspect of the alien invasion narrative.
        </span>

        <motion.div
          variants={slideIn("left", "tween", 0.2, 5)}
          className=" absolute lg:w-[20%] w-[70%] left-0 lg:top-[280px] top-[150px]"
        >
          <TitleText
            title={
              <Image
                src="/sides/about2.png"
                alt="Twitter"
                width={1000}
                height={1000}
                className=" absolute opacity-70"
              />
            }
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
