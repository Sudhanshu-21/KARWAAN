import React from "react";
import OneCard from "./oneCard";

function TwoCards({ key, img, name, content, width }) {
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
    <div className="flex justify-around items-center gap-[4%]">
      <OneCard
        key={key}
        img={img}
        name={name}
        content={content}
        width={width}
      />{" "}
      <OneCard
        key={key}
        img={img}
        name={name}
        content={content}
        width={width}
      />
    </div>
  );
}

export default TwoCards;
