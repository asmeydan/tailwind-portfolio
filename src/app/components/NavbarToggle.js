"use client"
import { toggle } from "@/redux/features/navbar/navbarSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const NavbarToggle = () => {

    const dispatch = useDispatch()

    const handleButton = ()=> {
        dispatch(toggle())
    }

  return (
    <div className=" w-[16px] h-[10px] relative cursor-pointer" onClick={()=> handleButton()}>
      <span className=" absolute top-0 rounded-lg h-[2px] w-full bg-[#8391a2] " />
      <span className=" absolute top-[5px] rounded-lg h-[2px] w-full bg-[#8391a2] " />
      <span className=" absolute top-[10px] rounded-lg h-[2px] w-full bg-[#8391a2] " />
    </div>
  );
};

export default NavbarToggle;
