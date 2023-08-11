"use client";
import { toggle } from "@/redux/features/navbar/navbarSlice";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navbar = useSelector((state) => state.navbar.isOpen);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  return (
    <Transition
      show={navbar}
      className=" bg-gray-600/30 fixed w-screen h-screen top-0 left-0"
      enter="transition-opacity duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className=" absolute inset-0" onClick={() => dispatch(toggle())} />{/* modal close on click outside */}
      {/* NAVBAR */}
      <Transition.Child
        className=" bg-white fixed top-[2vh] left-8 h-[96vh] w-full max-w-[250px] md:max-w-xs rounded-xl overflow-hidden flex flex-col pt-3 overflow-y-auto "
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-[150%]"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-[150%]"
      >
        <div className=" w-full flex justify-between gap-16 px-4">
          <div>Navbar</div>
          <div
            className=" text-lg text-gray-600 cursor-pointer"
            onClick={() => dispatch(toggle())}
          >
            x
          </div>
        </div>

        <div className=" h-32 w-full flex-col justify-center items-center overflow-hidden relative shrink-0 ">
          <Image
            src={user.img}
            alt="picture"
            width={320}
            height={320}
            className=" absolute top-1/2 -translate-y-1/2"
          />
          <div className=" w-full absolute top-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-3">
            <div className=" w-10 h-10 flex items-center justify-center rounded-full overflow-hidden bg-cyan-300 ">
                {user?.name[0]}
            </div>
            <div className=" font-semibold text-white text-border ">
                {user?.name}
            </div>
          </div>
        </div>

        <div>
            Components
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Navbar;

/*
<div className="h-screen fixed top-20 left-0 bg-red-200 w-40">navbar</div>
<div className={`fixed transition-all duration-500 ease-in-out top-20 h-screen left-0 overflow-hidden ${navbar ?"bg-green-300 w-96" :"bg-red-300 w-0"}`}>
        asdf
    </div>
*/
