"use client";
import React from "react";
import Link from "next/link";

function Menu({ menu, setMenu }) {
  return (
    <div className="relative  bg-gray-900">
      {" "}
      <div className="text-gray-900  font-semibold   ">
        <div className="w-full mx-auto  relative  ">
          <div className="absolute text-left mr-0 h-[70vh] text-base w-full   bg-white md:w-3/4   lg:w-2/4 px-2 py-2 font-semibold  shadow-lg font-[Arial] bg-opacity-95  z-20 leading-10 ">
            <ul className=" font-serif tracking-wider">
              <a href="/">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Home
                </li>
              </a>
              <a href="/about">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  About
                </li>
              </a>
              <a href="/conferenceandevent">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Event
                </li>
              </a>
              <a href="/ministry">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Ministries
                </li>
              </a>

              <a href="/giving">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Giving
                </li>
              </a>
              <a href="#footer">
                <li
                  className="block lg:hidden py-2"
                  onClick={() => {
                    setMenu(false);
                  }}>
                  Contact
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
