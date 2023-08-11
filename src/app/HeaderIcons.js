"use client"
import React from "react";
import DarkModeButton from "./components/DarkMode";
import { AiOutlineSearch } from "react-icons/ai";
import { RiNotification2Line } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import Image from "next/image";
import { useSelector } from "react-redux";

const HeaderIcons = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className=" flex items-center text-2xl gap-6 h-full">
      <div className=" flex items-center cursor-pointer">
        <AiOutlineSearch />
      </div>
      <div className=" flex items-center cursor-pointer">
        <RiNotification2Line />
      </div>
      <div className=" hidden md:flex items-center cursor-pointer">
        <BsGrid />
      </div>
      <div className=" flex items-center cursor-pointer">
        <FiSettings />
      </div>
      <DarkModeButton />

      <div className=" bg-[#3d3a77] h-full px-3 flex items-center cursor-pointer gap-3 ">
        <div className=" w-8 h-8 flex items-center justify-center rounded-full overflow-hidden bg-cyan-300 ">
          <Image src={user?.img} alt="picture" width={50} height={50} className=" scale-150" />
        </div>
        <div className=" text-lg md:flex flex-col hidden">
          <div className=" font-bold line">{user?.name}</div>
          <div className=" text-base font-light">{user?.job}</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIcons;
