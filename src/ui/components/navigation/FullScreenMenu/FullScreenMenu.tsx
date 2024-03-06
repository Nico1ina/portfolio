"use client";
import React, { useState } from "react";

const FullScreenMenu = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const genericHamburgerLine = `h-1 w-7 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <button
        className="flex flex-col h-12 w-12 justify-center items-center group hover:cursor-pointer pr-10 z-[999]"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? "rotate-45 translate-y-3" : " "
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? "opacity-0" : " "
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            showSidebar ? "-rotate-45 -translate-y-3" : " "
          }`}
        />
      </button>

      <div
        className={`top-0 right-0 w-[100vw] bg-[#ece7e1] p-10 pl-20 text-[#1a1818] fixed h-full z-40 ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div id="mySidenav" className="font-serif">
          <section className="text-[#1a1818]">
            <ul className="flex-col sans font-serif text-[170px]">
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200">
                <a href="/work">━Work</a>
              </li>
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200">
                <a href="/about">━About</a>
              </li>
              <li className="tracking-widest hover:italic transition ease-in-out delay-150 hover:translate-x-20 duration-200">
                <a href="mailto:nicolinalarsson1@gmail.com?subject=Lets work together!">
                  ━Contact
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default FullScreenMenu;
