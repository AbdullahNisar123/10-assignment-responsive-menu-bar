"use client"
import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
    <nav className="absolute md:relative text-center md:flex justify-end w-20 md:w-[100%] items-center flex-col md:flex-row bg-slate-500 p-2 ">
      <div
        className="flex flex-col justify-between w-[30px] h-[25px] cursor-pointer md:hidden ml-[.8rem]"
        id="menu-icon"
        onClick={toggleMenu}
      >
        {/* Burger Icon */}
        <span
          style={{
            transform: isOpen ? "rotate(45deg) translate(10px, 5px)" : "",
          }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
        <span
          style={{ opacity: isOpen ? 0 : 1 }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
        <span
          style={{ transform: isOpen ? "rotate(-45deg) translate(10px, -5px)" : "" }}
          className="h-[3px] w-[100%] bg-[#000] transition-all duration-[.3s]"
        ></span>
      </div>
      <ul
        className={`gap-4 capitalize font-semibold hidden md:flex flex-col md:flex-row md:items-end mt-2 md:mt-0 ${
          isOpen ? "show" : ""
        }`}
      >
        <li className=" px-1 pt-1 pb-0 text-[15px] cursor-pointer hover:border-b-black hover:border-b text-left">
          home
        </li>
        <li className=" px-1 pt-1 pb-0 text-[15px] cursor-pointer hover:border-b-black hover:border-b text-left">
          about
        </li>
        <li className=" px-1 pt-1 pb-0 text-[15px] cursor-pointer hover:border-b-black hover:border-b text-left">
          contact
        </li>
        <li className=" px-1 pt-1 pb-0 text-[15px] cursor-pointer hover:border-b-black hover:border-b text-left">
          services
        </li>
      </ul>
    </nav>
  );
}
