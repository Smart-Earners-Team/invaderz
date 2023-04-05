import React, { useEffect } from "react";
import { preLoaderAnim } from "./PreLoaderAnimation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div>
      <div className="preloader">
        <div className="texts-container">
          <span>The </span>
          <span>Invaders</span>
          <span>......</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
