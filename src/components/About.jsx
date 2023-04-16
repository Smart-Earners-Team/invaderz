import React from "react";
import { Autour_One } from "next/font/google";
import { TypingText, TitleText } from "./CustomTexts";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";
import Image from "next/image";

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
      <div className=" relative bg-bg-about flex flex-col justify-center text-black  lg:px-12 px-5 pt-6 lg:pt-[100px] object-contain">
        <span></span>
        <TitleText
          title={<>About TheInvaderz</>}
          className={`${authour.className} z-[200] text-white mb-5 text-2xl mx-auto lg:mx-0 font-extrabold lg:text-5xl lg:ml-[50px] shrink-0`}
        />
        <span
          className={`${authour.className}  flex flex-col items-center justify-center gap-2 text-white z-[99] lg:max-w-[800px] lg:text-md  h-fit  `}
        >
          <p>
            As the story progresses, the NFT holders will have the opportunity
            to vote on different choices that will affect the direction of the
            storyline.
          </p>{" "}
          <p>
            Each NFT will come with its own set of traits and abilities, which
            will be important in determining the outcome of certain events.
          </p>
          <p>
            For example, an NFT that represents a military personnel might be
            more effective in combat scenarios, while an NFT that represents a
            diplomat might be better suited for handling community progression
            storylines.
          </p>
          <p>
            {" "}
            As the story progresses, the choices made by the NFT holders will be
            compiled and used to determine the next stage of the narrative.{" "}
          </p>
          This means that the story will be shaped by the collective decisions
          of the NFT holders, creating a truly unique and interactive
          storytelling experience In addition to the storytelling aspect, the
          NFTs themselves will be valuable and collectible items. Each NFT will
          be unique, with its own set of traits and abilities, and will be
          tradable on various NFT marketplaces.
        </span>

        <div>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 3)}
            className=" absolute lg:w-[50%] w-[100%] right-0 lg:top-[100px] top-[150px] "
          >
            <TitleText
              title={
                <Image
                  src="/sides/tweet2.png"
                  alt="ghost"
                  width={1000}
                  height={1000}
                  className=" opacity-80"
                />
              }
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
