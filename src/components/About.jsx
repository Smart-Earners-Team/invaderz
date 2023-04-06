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
          title={<>About The Invaderz</>}
          className={`${authour.className} mb-5 text-xl font-extrabold lg:text-8xl shrink-0 mx-auto`}
        />
        <span
          className={`${authour.className} lg:max-w-[500px] lg:mt-[20px] h-fit text-center mb-3`}
        >
          Lorem ipsum dolor sit amet consectetur. Nec convallis nunc massa
          laoreet. Lorem ipsum dolor sit amet consectetur. Nec convallis nunc
          massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec convallis
          nunc massa laoreet.Lorem ipsum dolor sit amet consectetur. Nec
          convallis nunc massa laoreet.Lorem ipsum dolor sit amet consectetur.
          Nec convallis nunc massa laoreet.
        </span>
      </div>
    </motion.div>
  );
};

export default About;
