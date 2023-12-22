"use client";
import { React, useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import EventCard from "./eventCard";
function EventsCarousel() {
  // Function to get height and width of screen
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
  // Customising height of carousel based on screen ration
  var h = "h-[60vh]";
  var w = "w-[80vw]";
  if (screenSize.width / screenSize.height <= 0.55) {
    w = "w-[80vw]";
    h = "h-[100vw]";
  } else if (screenSize.width / screenSize.height <= 0.74) {
    w = "w-[80vw]";
    h = "h-[120vw]";
  } else if (screenSize.width / screenSize.height < 1) {
    w = "w-[80vw]";
    h = "h-[120vw]";
  } else if (screenSize.width / screenSize.height <= 1.3) {
    w = "w-[60vw]";
    h = "h-[75vw]";
  } else if (screenSize.width / screenSize.height <= 1.7) {
    w = "w-[50vw]";
    h = "h-[60vw]";
  } else if (screenSize.width / screenSize.height <= 2.3) {
    w = "w-[45vw]";
    h = "h-[40vw]";
  } else if (screenSize.width / screenSize.height <= 3) {
    w = "w-[35vw]";
    h = "h-[40vw]";
  } else if (screenSize.width / screenSize.height <= 3.5) {
    w = "w-[80vh]";
    h = "h-[100vh]";
  } else {
    w = "w-[85vh]";
    h = "h-[100vh]";
  }
  var et = "text-3xl";
  if (screenSize.width <= 500) {
    et = "text-3xl";
    // text-3xl md:text-4xl lg:text-5xl xl:text-6xl
  } else if (screenSize.width < 640) {
    et = "text-3xl";
  } else if (screenSize.width < 768) {
    et = "text-3xl";
  } else if (screenSize.width < 1024) {
    et = "text-4xl";
  } else if (screenSize.width < 1280) {
    et = "text-6xl";
  } else if (screenSize.width < 1536) {
    et = "text-6xl";
  } else if (screenSize.width < 2200) {
    et = "text-6xl";
  } else {
    et = "text-7xl";
  }
  // Array for Event Details
  const event = [
    {
      id: 1,
      img: "/AshutoshRana.jpeg",
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

  return (
    <div
      className="bg-no-repeat"
      style={{
        backgroundImage: 'url("/Pen.png")',
        backgroundSize: "contain",
      }}
    >
      <div className=" pb-[5%]">
        <div
          className={`mx-[10%] pt-[5%] pb-[2%] md:pb-[3%] ${et} font-bold italic font-['Open_Sans'] hover:scale-105`}
        >
          Events
        </div>
        <div className="mx-[10%] flex justify-center items-center">
          <div className={`${h}  ${w}`}>
            <Carousel
              slideInterval={5000}
              pauseOnHover
              className={` shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)] rounded-xl overflow-hidden`}
            >
              {event.map(({ id, img, name, content }) => (
                <EventCard
                  key={id}
                  img={img}
                  name={name}
                  content={content}
                  width={screenSize.width}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
// w-[80vw] sm:w-[70vw] md:w-[65vw] lg:w-[60vw] xl:w-[55vw] 2xl:w-[45vw]
export default EventsCarousel;
