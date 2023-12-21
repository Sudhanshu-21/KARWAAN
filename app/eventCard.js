import React from "react";
import { Button } from "flowbite-react";
function EventCard({ img, name, content, width, height }) {
  var wn = "text-2xl";
  var wc = "text-base";
  if (width <= 0.8 * height) {
    if (width >= 1800) {
      wn = "text-6xl";
      wc = "text-4xl";
    } else if (width >= 1536) {
      wn = "text-5xl";
      wc = "text-3xl";
    } else if (width >= 1280) {
      wn = "text-4xl";
      wc = "text-2xl";
    } else if (width >= 1024) {
      wn = "text-5xl";
      wc = "text-3xl";
    } else if (width >= 768) {
      wn = "text-3xl";
      wc = "text-xl";
    }
  } else if (width <= 1.4 * height) {
    if (width >= 1800) {
      wn = "text-6xl";
      wc = "text-4xl";
    } else if (width >= 1536) {
      wn = "text-5xl";
      wc = "text-3xl";
    } else if (width >= 1024) {
      wn = "text-4xl";
      wc = "text-2xl";
    } else if (width >= 768) {
      wn = "text-3xl";
      wc = "text-xl";
    }
  } else {
    if (width >= 1800) {
      wn = "text-5xl";
      wc = "text-3xl";
    } else if (width >= 1280) {
      wn = "text-4xl";
      wc = "text-xl";
    } else if (width >= 1024) {
      wc = "text-xl";
    }
  }
  return (
    <div className="bg-[#E8D9C6] h-full border-0 border-[#655643] grid grid-row-3 sm:w-full drop-shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full overflow-y-auto ">
        <img className="w-full " src={img}></img>
      </div>
      <div className="pt-2 px-4 text-center overflow-auto">
        <h5
          className={`py-1 md:py-3 ${wn} font-bold tracking-tight text-gray-900 dark:text-white`}
        >
          {name}
        </h5>
        <p className={`font-normal ${wc} text-gray-700 dark:text-gray-400`}>
          {content}
        </p>
      </div>
      <div className="pt-2 px-4 text-center text-2xl font-bold flex flex-col justify-center mx-2 mb-10">
        <button
          size="xl"
          className="py-2 bg-[#B29B7E] border-2 border-[#655643] hover:bg-[#876f52] hover:scale-105 hover:border-[3px] hover:shadow-lg rounded-md"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default EventCard;
