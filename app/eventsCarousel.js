"use client";
import React from "react";
import { Carousel, Card } from "flowbite-react";
import EventCard from "./eventCard";
function EventsCarousel() {
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
      img: "/vercel.svg",
      name: "Vaad-V-Vaad",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 4,
      img: "/rk_narayan_crop.png",
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
      img: "/vercel.svg",
      name: "Pen Flow",
      content:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
    {
      id: 7,
      img: "/rk_narayan_crop.png",
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
      img: "/vercel.svg",
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
      <div className="mt-[5%] pb-[5%]">
        <div className="mx-[10%] mb-[2%] md:mb-[3%]  text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold italic font-['Open_Sans']">
          Events
        </div>
        <div className="mx-[10%] sm:mx-[20%] lg:mx-[10%] ">
          <div className="h-[60vh] sm:h-[80vh] flex justify-center">
            <Carousel
              slideInterval={5000}
              pauseOnHover
              className="w-[80vw] sm:w-[70vw] md:w-[65vw] lg:w-[60vw] xl:w-[55vw] 2xl:w-[45vw]"
            >
              {event.map(({ id, img, name, content }) => (
                <EventCard key={id} img={img} name={name} content={content} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsCarousel;
