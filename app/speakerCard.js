import React from "react";

const SpeakerCard = ({ img, name, width, height }) => {
  var flexSize = 20;

  if (width / height <= 0.55) {
    flexSize = 35;
  } else if (width / height <= 0.74) {
    flexSize = 35;
  } else if (width / height < 1) {
    flexSize = 30;
  } else if (width / height < 1.3) {
    flexSize = 30;
  } else if (width / height <= 1.7) {
    flexSize = 20;
  } else if (width / height <= 2.3) {
    flexSize = 16;
  } else if (width / height <= 3) {
    flexSize = 20;
  } else if (width / height <= 3.5) {
    flexSize = 20;
  }

  return (
    <div
      className={`flex flex-col w-[${flexSize}vw] py-3 px-6 items-center drop-shadow-2xl hover:scale-105`}
    >
      {/* Image  */}
      <div className="rounded-full w-[100%] border-2 border-green-500 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]">
        <img src={img}></img>
      </div>
      <div className="pt-4 text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold italic font-['Open_Sans'] hover:scale-105">
        {name}
      </div>
    </div>
  );
};

export default SpeakerCard;
