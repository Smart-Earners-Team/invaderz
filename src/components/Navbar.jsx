import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky flex justify-between p-12 px-[60px] top-0 ">
      <div>
        <Image
          src="/invadersLogo.jpg"
          alt="bg"
          width={500}
          height={500}
          className="w-[15%] rounded-full "
        />
      </div>
      <div className="flex items-center justify-between gap-5 text-2xl text-white">
        <Link href="/home">Home</Link>
        <Link href="/task">WhiteList</Link>
        <Link href="/mint">Mint</Link>
      </div>
    </div>
  );
};

export default Navbar;
