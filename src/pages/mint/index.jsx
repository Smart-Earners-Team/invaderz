import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mint = () => {
  return (
    <Layout>
      <div className=" bg-bg-img bg-contain bg-center  ">
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
            <Link href="/task">Task</Link>
            <Link href="/mint">Mint</Link>
          </div>
        </div>
        <p className=" text-6xl mx-auto text-white text-center">Coming Soon</p>
        <div className=" flex flex-col pt-[100px] text-white p-10 text-xl   px-[80px]">
          <span className=" max-w-[300px] mt-[80px]">
            Be the first to know when we launch our minting page by subscribing
            to our newsletter.
          </span>

          <div className=" flex flex-col ">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className=" bg-transparent border border-white h-10 lg:w-[25%]  rounded-md p-3 mt-5"
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              className=" bg-transparent border border-white h-10 lg:w-[25%] rounded-md p-3 mt-5"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mint;
