"use client";
import React, { useState } from "react";
import Image from "next/image";

import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 z-50 ">
      <div className="flex items-center  justify-between max-w-screen-xl px-6 py-4 mx-auto md:p-12">
        <div>
          <Image
            src="/invadersLogo.jpg"
            alt="bg"
            width={500}
            height={500}
            className="w-[10%] rounded-full "
          />
        </div>

        <div className="hidden font-mono text-3xl z-[99999] md:block">
          <div className="flex flex-col items-center gap-4 ">
            <Link
              href="/home"
              className=" bg-blue-900 shadow-lg p-2 w-[100%] text-center font-medium text-gray-300 rounded-md hover:text-white"
            >
              Home
            </Link>
            <Link
              href="/task"
              className=" bg-blue-900 shadow-lg p-2 w-[100%] text-center  font-medium text-gray-300 rounded-md hover:text-white"
            >
              WhiteList
            </Link>
            <Link
              href="/mint"
              className="  bg-blue-900 shadow-lg p-2 w-[100%] text-center font-medium text-gray-300 rounded-md hover:text-white"
            >
              Mint
            </Link>
          </div>
        </div>

        <div className="md:hidden">
          <button
            className="p-1  text-gray-400 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            onClick={toggleNav}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? "" : "hidden"} md:hidden`}>
        <div className="flex flex-col bg-gray-500 text-white hover:bg-black items-center mx-auto rounded-lg ring-2 ring-white justify-center px-2 pt-2 pb-3 mr-10 space-y-1 border w-[60%] sm:px-3">
          <Link
            href="/home"
            className="block px-3 py-2 text-base font-medium  rounded-md "
          >
            Home
          </Link>
          <Link
            href="/task"
            className="block px-3 py-2 text-base font-medium  rounded-md "
          >
            WhiteList
          </Link>
          <Link
            href="/mint"
            className="block px-3 py-2 text-base font-medium  rounded-md "
          >
            Mint
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
