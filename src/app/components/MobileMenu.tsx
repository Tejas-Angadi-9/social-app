"use client";
import { useState } from "react";
import Link from "next/link";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "transform rotate-45" : ""
          } origin-left ease-in-out duration-500`}></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0" : ""
          } ease-in-out duration-500`}></div>
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45" : ""
          } origin-left ease-in-out duration-500`}></div>
      </div>
      {isOpen && (
        <div className="absolute top-24 left-0 w-full h-[calc(100vh - 96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
