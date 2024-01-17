"use client";
import { React, useState, useEffect } from "react";
import { Carousel } from "flowbite-react";
import EventCard from "./oneCard";
import TwoCards from "./twoCards";
import OneCard from "./oneCard";
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

  const [oneCard, setOneCard] = useState(false);

  // Define the update function
  function oneCardUpdate() {
    if (screenSize.width < 1.3 * screenSize.height) {
      setOneCard(true);
    } else {
      setOneCard(false);
    }
  }

  useEffect(() => {
    oneCardUpdate();
  }, [screenSize]);
  var h = "h-[60vh]";
  var w = "w-[80vw]";
  if (screenSize.width / screenSize.height <= 0.55) {
    w = "w-[80vw]";
    h = "h-[100vw]";
  } else if (screenSize.width / screenSize.height <= 0.74) {
    w = "w-[75vw]";
    h = "h-[94vw]";
  } else if (screenSize.width / screenSize.height < 1) {
    w = "w-[65vw]";
    h = "h-[82vw]";
  } else if (screenSize.width / screenSize.height <= 1.3) {
    w = "w-[75vw]";
    h = "h-[75vw]";
  } else if (screenSize.width / screenSize.height <= 1.7) {
    w = "w-[75vw]";
    h = "h-[60vw]";
  } else if (screenSize.width / screenSize.height <= 2.3) {
    w = "w-[75vw]";
    h = "h-[35vw]";
  } else if (screenSize.width / screenSize.height <= 3) {
    w = "w-[75vw]";
    h = "h-[40vw]";
  } else if (screenSize.width / screenSize.height <= 3.5) {
    w = "w-[75vw]";
    h = "h-[100vh]";
  } else {
    w = "w-[75vw]";
    h = "h-[100vh]";
  }

  // Array for Event Details
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

  return (
    <div>
      <div className="relative pb-[5%]">
        <div className=" absolute flex flex-col-reverse -z-10 border-0 border-sky-500 bottom-0 left-0">
          <img
            src="/Home/saraswati.png"
            alt="This is an image"
            className=" w-auto max-w-[60vw] max-h-[48vh] object-scale-down border-0 border-red-700 "
          ></img>
        </div>
        <div className="mx-[10%] pt-[5%] text-3xl md:text-4xl xl:text-6xl pb-1 sm:pb-4 font-bold italic font-['Open_Sans']">
          Events
        </div>
        <div className="mx-[10%] border-2 border-red-700 flex justify-center items-center ">
          <div className={`${h}  ${w} `}>
            <Carousel
              slide={false}
              pauseOnHover
              className={`border-2 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)] rounded-xl `}
            >
              {event.map(({ id, img, name, content }) => (
                <OneCard
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
