import React from "react";

function OneCard({ img, name, content, width }) {
  var wn = "text-2xl";
  var wc = "text-base";

  return (
    <div className=" max-w-full h-full border-4 border-blue-500 bg-[#B29B7E] grid grid-row-3 rounded-xl p-[4%] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]  overflow-hidden">
      {/* Event Photo  */}
      <div className="w-full rounded-xl overflow-y-auto border-0 hover:scale-105 shadow-[5px_0px_0px_0px_rgba(0,0,0,0.28)] hover:shadow-[8.0px_16.0px_16.0px_rgba(0,0,0,0.48)]">
        <img className="w-full min-h-full " src={img}></img>
      </div>
      {/* Event name and description  */}
      <div className="pt-2 text-center overflow-auto">
        <h5
          className={`py-1 md:py-3 ${wn} font-bold tracking-tight text-white`}
        >
          {name}
        </h5>
        <p className={`font-normal ${wc}`}>{content}</p>
      </div>
      {/* Button  */}
      <div
        className={`pt-2 text-center ${wc} font-bold flex flex-col justify-center mx-2 mb-10`}
      >
        <button
          size="xl"
          className="py-2 bg-[#E8D9C6] border-0 border-[#655643] hover:bg-[#876f52] hover:scale-[1.02] hover:border-0 hover:shadow-lg rounded-md"
        >
          Register Now
        </button>
      </div>
    </div>
  );
}

export default OneCard;
