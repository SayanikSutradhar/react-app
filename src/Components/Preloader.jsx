import React from "react";
import "./Preloader.css"; // Make sure this file exists

const Preloader = () => {


  return (
    <div className="preloader">
      <div className="preloader-content">
        <img
          src="https://i.postimg.cc/zGTGnLdp/e41a3da0-faf4-491e-948b-ff7107e768d6-ezgif-com-video-to-gif-converter.gif"
          alt="Loading..."
          className="cat-gif"
        />
        <p className="loading-text">Loading......</p>
      </div>
    </div>
  );
};

export default Preloader;
