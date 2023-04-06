"use client";
import { Autour_One, Coiny } from "next/font/google";
import { motion } from "framer-motion";
import { staggerContainer, slideIn } from "../utils/motion";
import Navbar from "./Navbar";

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
      <div className=" flex flex-col lg:pt-[100px] pt-12 pb-12 text-white  px-5 lg:px-[50px]">
        <motion.div
          variants={slideIn("left", "tween", 0.28, 6)}
          className="relative w-full md:-mt-[20px] -mt[12px] "
        >
          <span
            className={`${authour.className} mb-5 text-3xl font-extrabold lg:text-9xl shrink-0 -z-50 `}
          >
            TheInvaderz
          </span>
        </motion.div>
        <span
          className={`${authour.className} lg:max-w-[500px] lg:mt-[20px] text-sm mt-5`}
        >
          Lorem ipsum dolor sit amet consectetur. Risus turpis velit dolor
          egestas. Ut nisi urna quisque tincidunt in diam. Lorem cursus suscipit
          pretium pellentesque. Proin.
        </span>
      </div>
    </motion.div>
  );
};

export default Header;
