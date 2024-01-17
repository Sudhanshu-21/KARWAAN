"use client";
import { React, useState, useEffect } from "react";

const Glimpses = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  var gt = "text-3xl";
  if (screenSize.width <= 500) {
    gt = "text-3xl";
    // text-3xl md:text-4xl lg:text-5xl xl:text-6xl
  } else if (screenSize.width < 640) {
    gt = "text-3xl";
  } else if (screenSize.width < 768) {
    gt = "text-3xl";
  } else if (screenSize.width < 1024) {
    gt = "text-4xl";
  } else if (screenSize.width < 1280) {
    gt = "text-6xl";
  } else if (screenSize.width < 1536) {
    gt = "text-6xl";
  } else if (screenSize.width < 2200) {
    gt = "text-6xl";
  } else {
    gt = "text-7xl";
  }

  return (
    <div className="flex flex-col items-center pt-[5%]">
      <div className=" text-sky-500 text-3xl md:text-4xl xl:text-6xl pb-1 sm:pb-4 font-bold italic font-['Open_Sans']">
        Glimpses of Karwaan '23
      </div>
      <div className="max-w-[100vw] max-h-[70vh] flex flex-col sm:flex-row overflow-hidden hover:scale-105">
        <img src="/MaithiliThakur.jpg" className="max-h-[35vh] sm:max-h-[70vh] w-[100vw]"></img>
        <img src="/SandeepKhare1.jpg" className="max-h-[35vh] sm:max-h-[70vh]  w-[100vw]"></img>
      </div>
    </div>
  );
};

export default Glimpses;
