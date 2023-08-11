"use client";
import {
  setName,
  setAge,
  setImg,
  setJob,
} from "@/redux/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { faker } from "@faker-js/faker";
import { useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export default function Home() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setName(faker.person.fullName()));
    dispatch(setAge(faker.number.int({ min: 0, max: 100 })));
    dispatch(setJob(faker.person.jobDescriptor()));
    dispatch(setImg(faker.image.urlLoremFlickr()) )
    console.log(user);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-[#343a40] p-24 relative ">
      <Header />

      <div>asdf</div>

      <Navbar />
    </main>
  );
}
