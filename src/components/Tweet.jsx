"use client";

import React, { useEffect, useState, useMemo } from "react";
import CustomModal from "./CustomModal";
import { nanoid } from "nanoid";
import { TitleText } from "./CustomTexts";
import Image from "next/image";

function ActionTweet({}) {
  const model = nanoid();
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
    const CID = localStorage.getItem("theinvaders");
    const Data = JSON.parse(CID);
    if (CID && Data?.CID != undefined) {
      updateCID(Data.CID);
      setRetrievedUserID(Data.CID);
      setIsVerified(Data.verified);
    } else {
      updateCID(model);
    }
  }, []);

  function handleCacheID() {
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
        "theinvaders",
        JSON.stringify({
          CID: userCID,
          verified: true,
        })
      );
      setRetrievedUserID(userCID);
    }
  }, [isValid, formErr]);

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

  const handleVerify = () => {
    const validationResult = validate(tweetLink);
    setFormErr(validationResult);

    if (Object.keys(validationResult).length === 0) {
      setShowModal(true);
    }

    setIsvalid(true);
  };

  const handleModalClose = () => {
    setIsVerified(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full my-5 ">
      {isVerified && (
        <p className="p-10 text-sm text-black bg-blue-200 lg:text-xl rounded-xl ">
          Welcome back! Your User ID:{" "}
          <p className="mt-3 font-serif text-black animate-bounce">
            {retrievedUserID}
          </p>
        </p>
      )}

      {madeTweet && !isVerified && (
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
            onClick={handleVerify}
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
            handleClose={handleModalClose}
          />
        </div>
      )}
      <div className=" relative flex flex-col items-center justify-center h-[50vh] ">
        <TitleText
          title={
            <Image
              src="/sides/tweet2.png"
              alt="Twitter"
              width={1000}
              height={1000}
              className=" opacity-[40%] "
            />
          }
          className="absolute lg:w-[120%] w-[100%] "
        />
        {!isVerified && (
          <a
            onClick={handleCacheID}
            href={twitterLink}
            target="_blank"
            className="bg-blue-700 z-[99] hover:bg-blue-600 rounded-xl p-5 text-white font-bold  lg:w-[40%] text-center   m-3 "
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
