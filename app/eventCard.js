import React from "react";

function EventCard({ img, name, content, width }) {
  var wn = "text-2xl";
  var wc = "text-base";
  if (width <= 500) {
    wn = "text-xl";
    wn = "text-base";
  } else if (width < 640) {
    wn = "text-3xl";
    wc = "text-xl";
  } else if (width < 768) {
    wn = "text-4xl";
    wc = "text-2xl";
  } else if (width < 1024) {
    wn = "text-4xl";
    wc = "text-2xl";
  } else if (width < 1280) {
    wn = "text-6xl";
    wc = "text-4xl";
  } else if (width < 1536) {
    wn = "text-4xl";
    wc = "text-2xl";
  } else if (width < 2200) {
    wn = "text-4xl";
    wc = "text-2xl";
  } else {
    wn = "text-9xl";
  }
  return (
    <div className="bg-[#E8D9C6] h-full border-0 border-[#655643] grid grid-row-3 sm:w-full ">
      {/* Event Photo  */}
      <div className="w-full overflow-y-auto hover:scale-105">
        <img className="w-full " src={img}></img>
      </div>
      {/* Event name and description  */}
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
      {/* Button  */}
      <div
        className={`pt-2 px-4 text-center ${wc} font-bold flex flex-col justify-center mx-2 mb-10`}
      >
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
