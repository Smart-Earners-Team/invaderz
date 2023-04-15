import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" relative bg-blue-800 flex flex-col items-center justify-center h-[60vh] text-white">
      <p className=" lg:text-5xl text-2xl font-bold mb-5">The Invaderz</p>
      <p className=" mx-5 text-center max-w-3xl z-[99] ">
        The Invaderz NFT project represents a groundbreaking new approach to
        storytelling and NFT collectibles, and is sure to be an intriguing and
        exciting experience for all involved.
      </p>

      <div className="flex items-center justify-center gap-5 mt-10 ">
        <Image
          src="/Discord.png"
          alt="Discord"
          width={500}
          height={500}
          className="lg:w-[30%] w-[10%]"
        />
        <Image
          src="/Telegram.png"
          alt="Telegram"
          width={500}
          height={500}
          className="lg:w-[30%] w-[10%] opacity-50"
        />
        <Image
          src="/Twitter1.png"
          alt="Twitter"
          width={500}
          height={500}
          className="lg:w-[30%] w-[10%]"
        />
      </div>
      <div>
        <Image
          src="/sides/footer1.png"
          alt="Twitter"
          width={1000}
          height={1000}
          className=" absolute lg:w-[20%] w-[50%] right-0  bottom-[2px] opacity-50 "
        />
      </div>
    </div>
  );
};

export default Footer;
