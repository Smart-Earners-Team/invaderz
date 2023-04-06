import React from "react";

const PasteCode = () => {
  return (
    <div className=" bg-blue-700 h-[50vh] gap-5 pt-5">
      <div className="flex flex-col items-center justify-center ">
        <p className="m-5 mt-5 text-2xl font-bold text-center text-white lg:text-5xl">
          Paste Code
        </p>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter code generated here"
          className=" bg-transparent border border-black h-12 lg:h-20 lg:w-[35%] placeholder:text-center lg:placeholder:text-2xl ring-2 ring-white w-[80%] m-3 ml-5 rounded-md p-5 mt-5"
        />

        <button className="bg-blue-700 rounded-xl text-2xl text-white font-medium p-4  m-3 lg:w-[20%] ">
          Submit code
        </button>
      </div>
    </div>
  );
};

export default PasteCode;
