import React from "react";

const About = () => {
  return (
    <div className="mx-[5%] pt-2 border-0 border-green-700 flex flex-col sm:flex-row">
      {/* About Mag  */}
      <div className="sm:w-1/2 flex flex-col items-center text-blue-500">
        <div className="text-3xl md:text-4xl xl:text-6xl pb-1 sm:pb-4 font-bold italic font-['Open_Sans']">
          About Mag
        </div>
        <div className="w-11/12 pb-4 flex items-center justify-center">
          <img
            src="/img3.jpg"
            className=" border-2 border-black rounded-xl overflow-y-auto hover:scale-105 hover:border-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.28)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]"
          ></img>
        </div>
        <div className="w-11/12 text-center text-base sm:text-lg md:text-xll pb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </div>
      </div>
      {/* About Karwaan  */}
      <div className="sm:w-1/2 flex flex-col items-center text-red-600 ">
        <div className="text-3xl md:text-4xl xl:text-6xl pb-1 sm:pb-4 font-bold italic font-['Open_Sans']">
          About Karwaan
        </div>
        <div className="w-11/12 text-center text-base sm:text-lg md:text-xl pb-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex.
        </div>

        <div className="w-11/12 pb-4 flex items-center justify-center">
          <img
            src="/img3.jpg"
            className=" border-2 border-black rounded-xl overflow-y-auto hover:scale-105 hover:border-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.28)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
