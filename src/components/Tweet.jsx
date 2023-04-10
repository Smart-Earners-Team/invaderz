"use client";
import React, { useEffect, useState, useMemo } from "react";
import { Autour_One, Ribeye_Marrow } from "next/font/google";
import CustomModal from "./CustomModal";
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

function ActionTweet({}) {
  const model = nanoid();
  // const { address } = useAccount();
  const [userCID, updateCID] = useState();
  const [madeTweet, updateTweeterStatus] = useState();
  const [formErr, setFormErr] = useState("");
  const [isValid, setIsvalid] = useState(false);
  const [tweetLink, setTweetLink] = useState();
  const [showModal, setShowModal] = useState(false);
  const [retrievedUserID, setRetrievedUserID] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  const twitterLink = useMemo(() => {
    const prefix = "https://twitter.com/intent/tweet?text=";
    const url = `@TheInvaderz_ I accept\n\nAcceptance code: ${userCID}\n\nMy determination is unbreakable, my courage unwavering. I will defend this planet with all my might. Will you stand with me against the horde?\n\n🔗 https://TheInvaderz.zone/?code=${userCID}\n\n#TheyAreComing #EthereumNFT`;
    return prefix + encodeURIComponent(url);
  }, [userCID]);

  useEffect(() => {
    const CID = localStorage.getItem("coremunity");
    const Data = JSON.parse(CID);
    if (CID && Data?.CID != undefined) {
      updateCID(Data.CID);
      setRetrievedUserID(Data.CID); // Set the retrieved user ID
    } else {
      updateCID(model);
    }
  }, []);

  useEffect(() => {
    const CID = localStorage.getItem("coremunity");
    const Data = JSON.parse(CID);
    if (CID && Data?.CID != undefined) {
      updateCID(Data.CID);
      setIsVerified(Data.verified); // Retrieve isVerified state from local storage
    } else {
      updateCID(model);
    }
  }, []);

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

  useEffect(() => {
    if (Object.keys(formErr).length === 0 && isValid) {
      localStorage.setItem(
        "coremunity",
        JSON.stringify({
          CID: userCID,
          verified: true,
        })
      );
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
      const validationResult = validate(tweetLink);
      setFormErr(validationResult);

      if (Object.keys(validationResult).length === 0) {
        setShowModal(true);
        setIsVerified(true); // Set isVerified to true
      }

      setIsvalid(true);
    };
  }, [isValid, formErr]);

  return (
    <div className="flex flex-col items-center justify-center w-full my-5 ">
      {retrievedUserID && (
        <p className="p-10 text-sm text-black bg-blue-200 lg:text-xl rounded-xl ">
          Welcome back! Your User ID:{" "}
          <p className="mt-3 font-serif text-black animate-bounce">
            {retrievedUserID}
          </p>
        </p>
      )}

      {madeTweet && (
        <div className="flex flex-col items-center w-full">
          <input
            onChange={(e) => setTweetLink(e.target.value)}
            type="link"
            placeholder="Enter code generated here"
            className=" bg-transparent border border-black h-12 lg:h-20 lg:w-[35%] placeholder:text-center lg:placeholder:text-2xl ring-2 ring-white w-[80%] m-3 ml-5 rounded-md p-5 mt-5"
          ></input>
          <p className="justify-center p-0 m-0 text-xs text-center text-red-600">
            {formErr.tweetLink}
          </p>
          <button
            onClick={HandleVerify}
            className="px-4 py-2 my-4 text-xl text-center text-white bg-blue-700 border rounded-lg hover:scale-125"
          >
            Verify-Tweet
          </button>
          <p className="text-xl text-blue-800">
            If you have not tweeted, tweet first.
          </p>

          <CustomModal
            message="Your planet thanks you. You have been chosen"
            showModal={showModal}
            closeModal={() => setShowModal(false)}
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-center ">
        {!isVerified && (
          <a
            onClick={HandleCacheID}
            href={twitterLink}
            target="_blank"
            className="bg-blue-700 rounded-xl p-5 text-white font-bold  lg:w-[40%] text-center   m-3 "
          >
            Tweet content
          </a>
        )}
        <p className=" text-lg m-3 lg:max-w-[500px] text-center font-bold ">
          Make sure to follow our account to enable you generate code for the
          next stage
        </p>
      </div>
    </div>
  );
}

export default ActionTweet;
