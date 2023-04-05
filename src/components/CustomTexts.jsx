import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, className }) => (
  <motion.p variants={textContainer} className={className}>
    {Array.from(title).map((Letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {Letter === "" ? "\u00A0" : Letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, className }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={className}
  >
    {title}
  </motion.h2>
);
