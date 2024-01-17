"use client";
import React, { useState } from "react";
import { CarouselItem } from "./carouselItem";
export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const event = [
    {
      id: 1,
      img: "/Home/AshutoushRana2.avif",
      name: "Mahfil-e-khaas",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 2,
      img: "/img3.jpg",
      name: "SkillX",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 3,
      img: "/img3.jpg",
      name: "Vaad-V-Vaad",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 4,
      img: "/Home/rkNarayanWoBgWRYB.png",
      name: "Charcha Satra",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 5,
      img: "/VNIT-Nagpur-logo.jpg",
      name: "Marathi Katta",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 6,
      img: "/img3.jpg",
      name: "Pen Flow",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 7,
      img: "/Home/rkNarayanWoBgWRYB.png",
      name: "Spell Bee",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 8,
      img: "/AshutoshRana.jpeg",
      name: "The Official Word",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 9,
      img: "/img3.jpg",
      name: "Panel Discussion",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 10,
      img: "/img3.jpg",
      name: "Surmay Sandhya",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = event.length - 1;
    } else if (newIndex >= event.length) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="relative pb-[5%]">
      <div className=" absolute flex flex-col -z-10 border-0 border-sky-500 bottom-0 left-0">
        <img
          src="/Home/saraswati.png"
          alt="This is an image"
          className=" w-auto max-w-[60vw] max-h-[48vh] object-scale-down border-0 border-red-700 "
        ></img>
      </div>
      <div className="mx-[10%] pt-[5%] text-3xl md:text-4xl xl:text-6xl pb-1 sm:pb-4 font-bold italic font-['Open_Sans']">
        Events
      </div>
      <div className="mx-[10%] border-2 border-red-700 overflow-hidden flex flex-col items-center justify-center">
        <div
          className="transition duration-300 shadow-[0_5px_15px_-15px_rgba(0,0,0,0.0.05)] whitespace-nowrap items-center justify-center"
          style={{ transform: `translate(-${activeIndex * 100}%)` }}
        >
          {event.map(({ id, img, name, content }) => {
            // console.log("id " + id);
            return (
                <CarouselItem
                  key={id}
                  img={img}
                  name={name}
                  content={content}
                  width={"70%"}
                  activeIndex={activeIndex}
                />
            );
          })}
        </div>

        <div className="flex justify-evenly">
          <button
            className="bg-none border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <span>back</span>{" "}
          </button>
          <div className="flex justify-around items-center mt-[20px]">
            {event.map((event, index) => {
              return (
                <button
                  className="border-none cursor-pointer"
                  onClick={() => {
                    updateIndex(index);
                  }}
                >
                  <span
                    className={`material-symbols-outlined ${
                      index === activeIndex
                        ? "text-[#ffffff]"
                        : "text-[#26343f]"
                    }`}
                  >
                    button
                  </span>
                </button>
              );
            })}
          </div>
          <button
            className="bg-none border-none cursor-pointer mt-[20px]"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <span class="material-symbols-outlined">fwd</span>
          </button>
        </div>
      </div>
    </div>
  );
};
