import React from "react";
import { Button, Card } from "flowbite-react";
function EventCard({ id, img, name, content }) {
  return (
    <div className="bg-[#E8D9C6] h-full border-0 border-[#655643] grid grid-row-3 sm:w-full drop-shadow-2xl rounded-xl overflow-hidden">
      <div className="w-full overflow-y-auto ">
        <img className="w-full " src={img}></img>
      </div>
      <div className=" pt-2 px-4 text-center overflow-auto">
        <h5 className="py-1 md:py-3 text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="font-normal lg:text-xl 2xl:text-xl text-gray-700 dark:text-gray-400">
          {content}
        </p>
      </div>
      <div className="pt-2 px-4 text-center text-5xl flex flex-col justify-center mb-10">
        <Button
          size="xl"
          className="bg-[#B29B7E] border-2 border-[#655643] hover:scale-105"
        >
          Register Now
        </Button>
      </div>
    </div>
  );
}

export default EventCard;
