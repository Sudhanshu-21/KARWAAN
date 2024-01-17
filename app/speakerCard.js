import React from "react";

const SpeakerCard = ({ img, name, width, height }) => {
  var flexSize = "w-[20vw]";

  if (width / height <= 0.55) {
    flexSize = "w-[35vw]";
  } else if (width / height <= 0.74) {
    flexSize = "w-[35vw]";
  } else if (width / height < 1) {
    flexSize = "w-[30vw]";
  } else if (width / height < 1.3) {
    flexSize = "w-[30vw]";
  } else if (width / height <= 1.7) {
    flexSize = "w-[20vw]";
  } else if (width / height <= 2.3) {
    flexSize = "w-[16vw]";
  } else if (width / height <= 3) {
    flexSize = "w-[20vw]";
  } else if (width / height <= 3.5) {
    flexSize = "w-[20vw]";
  }

  return (
    <div
      className={`flex flex-col ${flexSize} py-3 items-center  justify-start drop-shadow-2xl hover:scale-105`}
    >
      {/* Image  */}
      <div className="rounded-full w-[95%] border-2 border-green-500 overflow-hidden shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:scale-105 hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]">
        <img src={img}></img>
      </div>
      <div className="pt-4 text-center text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold italic font-['Open_Sans'] hover:scale-105">
        {name}
      </div>
    </div>
  );
};

export default SpeakerCard;
