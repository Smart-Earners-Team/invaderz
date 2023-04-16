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
      <footer className="relative flex flex-col items-center justify-center w-full h-screen text-white bg-cover bg-bg-imgfooter">
        <p className="mb-5 text-4xl font-bold lg:text-8xl">The Invaderz</p>
        <p className="mx-5 text-center max-w-3xl z-[99]">
          The Invaderz NFT project represents a groundbreaking new approach to
          storytelling and NFT collectibles, and is sure to be an intriguing and
          exciting experience for all involved.
        </p>

        <div className="flex items-center justify-center gap-5 mt-32 z-[99] opacity-70  ">
          <a href="https://twitter.com/TheInvaderz_" target="_blank">
            <Image
              src="/Twitter1.png"
              alt="Twitter"
              width={500}
              height={500}
              className="lg:w-[90%] w-[70%]"
            />
          </a>
        </div>
        <div>
          <motion.div
            variants={slideIn("left", "tween", 0.2, 6)}
            className="absolute lg:w-[20%] w-[70%] left-0 bottom-[10px]"
          >
            <TitleText
              title={
                <Image
                  src="/sides/footer.png"
                  alt="Twitter"
                  width={1000}
                  height={1000}
                />
              }
            />
          </motion.div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
