import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-blue-800 flex flex-col items-center justify-center h-[50vh] text-white">
      <p className=" lg:text-5xl text-2xl font-bold mb-5">The Invaderz</p>
      <p className=" mx-5 text-center">
        Lorem ipsum dolor sit amet consectetur. Ut ullamcorper nibh fring
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
          className="lg:w-[30%] w-[10%]"
        />
        <Image
          src="/Twitter1.png"
          alt="Twitter"
          width={500}
          height={500}
          className="lg:w-[30%] w-[10%]"
        />
      </div>
    </div>
  );
};

export default Footer;
