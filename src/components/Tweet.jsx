import React from "react";

const Tweet = () => {
  return (
    <div>
      <div className=" flex flex-col justify-center ml-[750px]">
        <p className=" text-5xl p-5 ml-[250px]">Tweet</p>
        <p className=" max-w-[500px] border-2 border-white rounded-lg p-3">
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

      <div className=" bg-blue-700 rounded-xl p-5 w-[20%] mx-[20%] m-5 ">
        <button>Tweet content</button>
      </div>
    </div>
  );
};

export default Tweet;
