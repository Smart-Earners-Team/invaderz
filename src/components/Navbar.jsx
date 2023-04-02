import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex">
      <div>
        <Image
          src="/Discord.png"
          alt="bg"
          width={500}
          height={500}
          className=" "
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <p>Home</p>
        <p>Task</p>
        <p>Mint</p>
      </div>
    </div>
  );
};

export default Navbar;
