"use client";

import { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";

function NavBar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div>
        <nav className="xl:w-3/4 mx-auto flex justify-end h-[7vh] py-4 px-2 gap-8">
          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <h3>+6108776494 / 0243407536</h3>
          </div>
          <div className="flex justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>

            <h3>addaed@alcorn.edu</h3>
          </div>
        </nav>
      </div>
      <div className=" z-50 w-full bg-gradient-to-r from-sky-600 via-sky-900 to-sky-900 pt-2 shadow-md h-[10vh] ">
        <nav className="text-white flex justify-between w-full px-2 xl:px-0 xl:w-3/4 xl:mx-auto ">
          <div className="py-2 flex justify-start w-full lg:w-3/4 items-center ">
            <div>
              <h2 className="text-3xl font-bold">IRC</h2>
            </div>
          </div>

          <div className="text-base font-bold w-full py-4">
            <ul className="flex justify-evenly">
              <a href="/">
                <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                  Home
                </li>
              </a>
              <a href="/about">
                <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                  About Us
                </li>
              </a>
              <a href="/about">
                <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                  Services
                </li>
              </a>
              <a href="/about">
                <li className="mx-4 hidden lg:block hover:border-b-2 px-1 py-1 transition-all duration-300">
                  Projects
                </li>
              </a>

              <div
                className="text-2xl  lg:hidden border-l-2 border-l-sky-600 pl-4 "
                onClick={toggleMenu}>
                {menu === true ? (
                  "X"
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                )}
              </div>
            </ul>
          </div>
        </nav>
        <div className="w-full">
          <div
            className={
              menu
                ? "w-full mt-[0] transition-all duration-500 z-[-20]  "
                : "w-full mt-[-100rem] transition-all duration-1000"
            }>
            <Menu menu={menu} setMenu={setMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
