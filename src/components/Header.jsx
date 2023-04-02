import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="  ">
      <div className=" flex justify-between px-10 p-12 ">
        <div>
          <Image
            src="/Discord.png"
            alt="bg"
            width={500}
            height={500}
            className="w-[60%] "
          />
        </div>
        <div className="flex items-center justify-between gap-5 text-white">
          <Link href="/home">Home</Link>
          <Link href="">Task</Link>
          <Link href="/mint">Mint</Link>
        </div>
      </div>
      <div className=" flex flex-col pt-[100px] pb-20 text-white   px-[80px]">
        <span className=" text-6xl ">The Invaderz</span>
        <span className=" max-w-[300px] mt-[80px]">
          Lorem ipsum dolor sit amet consectetur. Risus turpis velit dolor
          egestas. Ut nisi urna quisque tincidunt in diam. Lorem cursus suscipit
          pretium pellentesque. Proin.
        </span>
      </div>
    </div>
  );
};

export default Header;
