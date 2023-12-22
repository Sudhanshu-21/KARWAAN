"use client";
import { React, useState, useEffect } from "react";
import SpeakerCard from "./speakerCard";

const Speakers = () => {
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

  var st = "text-3xl";
  if (screenSize.width <= 500) {
    st = "text-3xl";
    // text-3xl md:text-4xl lg:text-5xl xl:text-6xl
  } else if (screenSize.width < 640) {
    st = "text-3xl";
  } else if (screenSize.width < 768) {
    st = "text-3xl";
  } else if (screenSize.width < 1024) {
    st = "text-4xl";
  } else if (screenSize.width < 1280) {
    st = "text-6xl";
  } else if (screenSize.width < 1536) {
    st = "text-6xl";
  } else if (screenSize.width < 2200) {
    st = "text-6xl";
  } else {
    st = "text-7xl";
  }

  const speaker = [
    {
      id: 1,
      img: "/MaithiliThakur.jpg",
      name: "Maithili Thakur",
    },
    {
      id: 2,
      img: "/MaithiliThakur.jpg",
      name: "Manu Vaishali",
    },
    {
      id: 3,
      img: "/VishwasNangrePatil.jpg",
      name: "Vishwas Nangare Patil",
    },
    {
      id: 4,
      img: "/MaithiliThakur.jpg",
      name: "J Sai Deepak",
    },
    {
      id: 5,
      img: "/MaithiliThakur.jpg",
      name: "Ashutoush Rana",
    },
    {
      id: 6,
      img: "/AmandeepSingh.jpg",
      name: "Amandeep Singh",
    },
    {
      id: 7,
      img: "/RahulDeshpande.jpg",
      name: "Rahul Deshpande",
    },
    {
      id: 8,
      img: "/SandeepKhare1.jpg",
      name: "Sandeep Khare",
    },
    {
      id: 9,
      img: "/MaithiliThakur.jpg",
      name: "Ananad Ranganathan",
    },
    {
      id: 10,
      img: "/MaithiliThakur.jpg",
      name: "Brijesh Singh",
    },
  ];

  return (
    <div className="bg-[#B29B7E] px-[10%] ">
      <div className={` gap-8  pb-[5%]`}>
        <div
          className={`pt-[5%] pb-[2%] md:pb-[3%] ${st} font-bold italic font-['Open_Sans'] hover:scale-105`}
        >
          Speakers
        </div>
        <div className="flex flex-wrap justify-around items-center ">
          {speaker.map(({ id, img, name }) => (
            <SpeakerCard
              key={id}
              img={img}
              name={name}
              width={screenSize.width}
              height={screenSize.height}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
