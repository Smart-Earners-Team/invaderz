import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";
import { TitleText } from "./CustomTexts";

const Footer = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
    >
      <footer className="relative bg-bg-imgfooter  w-full bg-cover h-screen flex flex-col items-center justify-center text-white">
        <p className="lg:text-8xl text-4xl font-bold mb-5">The Invaderz</p>
        <p className="mx-5 text-center max-w-3xl z-[99]">
          The Invaderz NFT project represents a groundbreaking new approach to
          storytelling and NFT collectibles, and is sure to be an intriguing and
          exciting experience for all involved.
        </p>

        <div className="flex items-center justify-center gap-5 mt-32 z-[99] opacity-70  ">
          <Image
            src="/Discord.png"
            alt="Discord"
            width={500}
            height={500}
            className="lg:w-[30%] w-[30%]"
          />
          <Image
            src="/Telegram.png"
            alt="Telegram"
            width={500}
            height={500}
            className="lg:w-[30%] w-[30%] "
          />
          <Image
            src="/Twitter1.png"
            alt="Twitter"
            width={500}
            height={500}
            className="lg:w-[30%] w-[30%] "
          />
        </div>
        <div>
          <TitleText
            title={
              <Image
                src="/sides/footer1.png"
                alt="Twitter"
                width={1000}
                height={1000}
              />
            }
          />
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
