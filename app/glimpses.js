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
    <div className="flex flex-col items-center pt-[5%] pb-[5%]">
      <div className={`${gt} font-bold italic font-['Open_Sans']`}>
        Glimpses of Karwaan '23
      </div>
      <div className="rounded-lg border-2 border-black overflow-hidden mt-[5%] w-[70vw] h-[33.25vw] flex shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img src="/MaithiliThakur.jpg"></img>
        <img src="/SandeepKhare1.jpg"></img>
      </div>
    </div>
  );
};

export default Glimpses;
