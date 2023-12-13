"use client";
import Link from "next/link";
import { React, useState } from "react";

const Navbar = () => {
  const [status, setStatus] = useState(false);
  function statusUpdate() {
    setStatus(!status);
    console.log(`status = ${status}`);
  }
  const links = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },
    {
      id: 2,
      link: "events",
      name: "Events",
    },
    {
      id: 3,
      link: "team",
      name: "Team",
    },
    {
      id: 4,
      link: "contact",
      name: "Contact",
    },
  ];

  return (
    <div className="md:fixed md:z-50">
      <div className=" grid grid-cols-12 text-white ps-[24px] md:pe-0 lg:pe-[24px] sm:pt-[10px] pt-[5px]">
        {/* KARWAAN LOGO */}
        <div className="text-blue nav col-span-2 md:col-span-1">
          <img
            src="/VNIT-Nagpur-logo.jpg"
            className="border-0 border-sky-500 "
          ></img>
        </div>
        {/* Navbar links for md and large screens */}
        <div className="hidden pt-[10px] col-end-13 col-span-8 md:px-0 md:visible md:flex md:flex-row-reverse">
          <ul className=" md:text-base md:flex lg:text-xl xl:text-3xl">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium  link-underline transition-all  hover:text-[#ca6b6b] hover:scale-105 pe-[25px]"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar button for small screens */}
        <div className="col-end-13 col-span-8 flex flex-row-reverse md:hidden ">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => statusUpdate()}
          >
            <div className="flex flex-col">
              <div className="rounded-md border-[3px] min-w-[30px] m-[2px] me-[22px] border-white"></div>
              <div className="rounded-md border-[3px] min-w-[30px] m-[2px] me-[22px] border-white"></div>
              <div className="rounded-md border-[3px] min-w-[30px] m-[2px] me-[22px] border-white"></div>
            </div>
          </button>
        </div>
        {/* Navbar links for small screens  */}
        {status === true && (
          <div className="col-span-3 flex flex-row md:hidden">
            <ul className="text-sm md:flex">
              {links.map(({ id, link, name }) => (
                <li
                  key={id}
                  className="text-[#862727] nav-links px-4 cursor-pointer capitalize font-medium  link-underline transition-all  hover:text-[#ca6b6b] hover:scale-105 pe-[32px]"
                >
                  <Link href={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
