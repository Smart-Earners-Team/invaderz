import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Mint = () => {
  return (
    <Layout>
      <div className=" bg-blue-200 bg-contain bg-center  ">
        <div className=" flex justify-between px-10 lg:p-12 pt-5 ">
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
            <Link href="/task">Whitelist</Link>
            <Link href="/mint">Mint</Link>
          </div>
        </div>
        <p className=" text-6xl mx-auto mt-5 text-white text-center">
          Coming Soon
        </p>
        <div className=" flex flex-col lg:pt-[100px] pt-10 text-white p-5 text-xl   lg:px-[80px]">
          <span className=" lg:max-w-[300px] text-center lg:mt-[30px]">
            Be the first to know when we launch our minting page by following us
            on Twitter
          </span>
          <div className="bg-blue-900 rounded-lg mx-auto lg:ml-[50px] p-5 px-10 w-fit m-5">
            Follow
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mint;
