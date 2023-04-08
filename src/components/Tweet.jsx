"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Autour_One, Ribeye_Marrow } from "next/font/google";
import { nanoid } from "nanoid";

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

function ActionTweet({ setVerify }) {
  const model = nanoid();
  // const { address } = useAccount();
  const [userCID, updateCID] = useState();
  const [madeTweet, updateTweeterStatus] = useState();
  const [formErr, setFormErr] = useState("");
  const [isValid, setIsvalid] = useState(false);
  const [tweetLink, setTweetLink] = useState();

  useEffect(() => {
    const CID = localStorage.getItem("coremunity");
    const Data = JSON.parse(CID);
    if (CID && Data?.CID != undefined) {
      updateCID(Data.CID);
    } else {
      updateCID(model);
    }
  }, []);

  const twitterLink = useMemo(() => {
    const prefix = "https://twitter.com/intent/tweet?text=";
    const url = `I identify as a Theinvaderz #COmmunity🌟 member @theinvaderz\n\n CID: ${userCID} \n\nhttps:///Theinvaderz.lol/early/${userCID}\n\n#TheinvaderzCommunity #Community #Twitter`;
    return prefix + encodeURIComponent(url);
  }, [userCID]);

  function HandleCacheID() {
    localStorage.setItem(
      "theinvaders",
      JSON.stringify({
        CID: userCID,
        verified: false,
      })
    );
    updateTweeterStatus(true);
  }

  const validate = (tweetLink) => {
    const errors = {};
    const res = tweetLink.match(
      /(http(s)?:\/\/.)?(www\.)?twitter\.com\/([-a-zA-Z0-9@:%_\+.~#?&//=]*)\/status\/([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    );
    if (!tweetLink) {
      errors.tweetLink = "Tweet link is required.";
    } else if (res == null) {
      errors.tweetLink = "Please provide a valid tweet link";
    }
    return errors;
  };

  const HandleVerify = () => {
    setFormErr(validate(tweetLink));
    setIsvalid(true);
  };

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isValid) {
      localStorage.setItem(
        "coremunity",
        JSON.stringify({
          CID: userCID,
          verified: true,
        })
      );
      setVerify(true);
      // switchTweeted();
    }
  }, [isValid, formErr]);

  return (
    <div className="flex flex-col items-center justify-center w-full my-5 ">
      {madeTweet && (
        <div className="flex flex-col items-center w-full">
          <input
            onChange={(e) => setTweetLink(e.target.value)}
            placeholder="Enter your tweet link"
            type="link"
            className="sm:w-[360px] w-[159px] p-2 rounded-lg placeholder:text-center"
          ></input>
          <p className="justify-center p-0 m-0 text-xs text-center text-red-600">
            {formErr.tweetLink}
          </p>
          <button
            onClick={HandleVerify}
            className="rounded-lg border px-4 py-2 text-xl text-white bg-blue-700 text-center hover:scale-125 my-4"
          >
            Verify Tweet
          </button>
          <p className="text-xl text-blue-800">
            If you have not tweeted, tweet first
          </p>
        </div>
      )}
      <div className="flex flex-col items-center justify-center  ">
        <a
          onClick={HandleCacheID}
          href={twitterLink}
          target="_blank"
          className="bg-blue-700 rounded-xl p-5 text-white font-bold  lg:w-[40%] text-center   m-3 "
        >
          Tweet content
        </a>
        <p className=" text-lg m-3 lg:max-w-[500px] text-center font-bold ">
          Make sure to follow our account to enable you generate code for the
          next stage
        </p>
      </div>
    </div>
  );
}

export default ActionTweet;

// import React from "react";
// import { Autour_One, Ribeye_Marrow } from "next/font/google";

// const authour = Autour_One({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });
// const ribeye = Ribeye_Marrow({
//   weight: "400",
//   subsets: ["latin"],
//   display: "swap",
// });

// const Tweet = () => {
//   return (
//

//       <div className="flex flex-col items-center justify-center md:hidden ">
//         <button className="bg-blue-700 rounded-xl p-5 text-white font-bold  lg:w-[20%]  lg:ml-[100px]     m-3 ">
//           Tweet content
//         </button>
//         <p className=" text-lg m-3 lg:max-w-[500px] text-center font-bold ">
//           Make sure to follow our account to enable you generate code for the
//           next stage
//         </p>
//       </div>
//       <div className="hidden p-6 md:block">
//         <button className="bg-blue-700 rounded-xl p-5 text-white font-bold  lg:w-[20%]  lg:ml-[100px]     m-3 ">
//           Tweet content
//         </button>
//         <p className=" text-lg m-3 lg:max-w-[500px] text-center font-bold ">
//           Make sure to follow account out account to enable you generate code
//           for the next stage
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Tweet;
