import React from "react";
import Link from "next/link";
import Navbar from "../navbar";

const Page = () => {
  return (
    <>
      <div>
        <Navbar />
        Events
      </div>
      <Link href="/">Home</Link>
    </>
  );
};

export default Page;
