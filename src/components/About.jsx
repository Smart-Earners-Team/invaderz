import React from "react";
import { Autour_One } from "next/font/google";
import { TypingText, TitleText } from "./CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";

const authour = Autour_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
    >
      <div className=" flex flex-col justify-center items-end text-black lg:px-12 px-5 pt-6 lg:pt-[100px]">
        <span></span>
        <TitleText
          title={<>About TheInvaderz</>}
          className={`${authour.className} mb-5 text-xl font-extrabold lg:text-8xl shrink-0 mx-auto`}
        />
        <span
          className={`${authour.className} lg:max-w-[500px] lg:mt-[20px] h-fit text-center mb-3`}
        >
          As the story progresses, the NFT holders will have the opportunity to
          vote on different choices that will affect the direction of the
          storyline. Each NFT will come with its own set of traits and
          abilities, which will be important in determining the outcome of
          certain events. For example, an NFT that represents a military
          personnel might be more effective in combat scenarios, while an NFT
          that represents a diplomat might be better suited for handling
          community progression storylines. As the story progresses, the choices
          made by the NFT holders will be compiled and used to determine the
          next stage of the narrative. This means that the story will be shaped
          by the collective decisions of the NFT holders, creating a truly
          unique and interactive storytelling experience In addition to the
          storytelling aspect, the NFTs themselves will be valuable and
          collectible items. Each NFT will be unique, with its own set of traits
          and abilities, and will be tradable on various NFT marketplaces.
        </span>
      </div>
    </motion.div>
  );
};

export default About;
