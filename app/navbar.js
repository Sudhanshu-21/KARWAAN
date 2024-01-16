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
    <div className="md:fixed z-50 ">
      <div className=" grid grid-cols-12 text-white md:ps-[24px] 2xl:pe-[15px] md:pt-[0px]">
        {/* KARWAAN LOGO */}
        <div className="text-blue nav row-span-2 col-span-2 md:col-span-1">
          <img
            src="/Home\KarwaanLogo.png"
            className="border-0 border-sky-500 "
          ></img>
        </div>
        {/* Navbar links for md and large screens */}
        <div className="hidden pt-[10px] col-end-13 col-span-8 px-0 md:visible md:flex md:flex-row-reverse">
          <ul className=" md:text-sm md:flex lg:text-base xl:text-xl 2xl:text-2xl">
            {links.map(({ id, link, name }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium  link-underline transition-all  hover:text-[#ca6b6b] hover:scale-105 pe-[20px] 2xl:pe-[15px]"
              >
                <Link href={link}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Navbar button for small screens */}
        <div className="col-end-13 col-span-8 flex flex-row-reverse z-10 md:hidden ">
          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => statusUpdate()}
          >
            <div className="flex flex-col pt-6 sm:pt-8">
              <div className="rounded-md border-[3px] min-w-[30px] mb-[2px] me-[22px] border-white"></div>
              <div className="rounded-md border-[3px] min-w-[30px] mb-[2px] me-[22px] border-white"></div>
              <div className="rounded-md border-[3px] min-w-[30px] mb-[2px] me-[22px] border-white"></div>
            </div>
          </button>
        </div>
        {/* Navbar links for small screens  */}
        {status === true && (
          <div className="col-span-3 flex flex-row md:hidden">
            <ul className="text-sm">
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
