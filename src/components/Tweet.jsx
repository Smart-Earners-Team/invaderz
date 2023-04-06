import React from "react";
import { Autour_One, Ribeye_Marrow } from "next/font/google";

const authour = Autour_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const ribeye = Ribeye_Marrow({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const Tweet = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center lg:ml-[750px]">
        <p
          className={` ${authour.className} text-5xl p-5 lg:ml-[250px] mx-auto`}
        >
          Tweet
        </p>
        <p
          className={`${authour.className} text-white max-w-[700px] border-2 border-white rounded-lg p-3 m-3
        `}
        >
          Lorem ipsum dolor sit amet consectetur. Pellentesque pellentesque sem
          a lacus enim. Neque at massa a diam. Egestas dui montes turpis
          pharetra feugiat ultricies elit turpis augue. Interdum morbi ut mauris
          egestas tristique lobortis massa. Nulla ipsum leo tincidunt dignissim
          porttitor ut. Turpis sagittis lectus id nibh at pellentesque
          pellentesque lectus. Lacinia et faucibus adipiscing quam consequat.
          Nunc tortor sollicitudin neque eget vitae ut. Tellus eu eget molestie
          sed arcu velit pretium sit pharetra. Risus aliquam tristique libero
          pulvinar nunc congue. Elit id et vulputate aenean aenean commodo
          sapien quis
        </p>
      </div>

      <div className="px-6 ">
        <button className="bg-blue-700 rounded-xl p-5 text-white font-bold  lg:w-[20%] ml-12 lg:ml-[100px]     m-3 ">
          Tweet content
        </button>
        <p className=" text-lg m-3 lg:max-w-[500px] text-center font-bold ">
          Make sure to follow account out account to enable you generate code
          for the next stage
        </p>
      </div>
    </div>
  );
};

export default Tweet;
