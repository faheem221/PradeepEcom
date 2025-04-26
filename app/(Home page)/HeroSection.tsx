"use client";
import React from "react";
import { ArrowDown } from "@phosphor-icons/react";
import "@/app/globals.css";
const HeroSection = () => {
  const scrollDown = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: window.innerHeight, // Scrolls down by one full viewport height
        behavior: "smooth", // Smooth scroll animation
      });
    }
  };
  return (
    <div className="h-[100vh] relative w-full">
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-slate-900/25 via-transparent to-slate-900/25 z-10" />
      <div className="w-full h-full absolute top-0 left-0">
        <img
          src={
            "https://images.unsplash.com/photo-1742109536609-71280cd13c9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          className=" w-full h-full object-cover "
        />
      </div>
      <div className="w-full relative container h-full flex justify-center items-center">
        <p className="absolute text-slate-50 bottom-10 left-0 max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam,
        </p>

        <div className="absolute bottom-5 right-0">
          <div className="relative w-14 h-14 flex justify-center items-center">
            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full bg-slate-200 animate-ripple" />

            {/* Icon/Button Content */}
            <button
              onClick={() => scrollDown()}
              className="relative z-10 w-14 h-14 bg-slate-200 flex justify-center items-center rounded-full"
            >
              <ArrowDown className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="relative z-20 ">
          <h1 className="text-3xl lg:text-8xl !leading-[1.2] text-[#C6DBFE]  font-[600]">
            <span className="relative">
              {" "}
              Explore{" "}
              <span className="absolute text-transparent top-5 max-h-[75px] right-full ">
                00{" "}
                <img
                  className="absolute top-0 rounded-full left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1704127631630-ba81160916f9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </span>{" "}
            </span>
            <span className=" relative block w-fit ml-20 ">
              <span className="absolute text-transparent max-h-[75px] top-5 left-[105%] ">
                00
                <img
                  className="absolute top-0 rounded-full left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1709338573282-2ca4e80f6f76?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </span>
              Seek{" "}
            </span>{" "}
            <span className="block relative ml-36 ">
              <span className="absolute max-h-[75px] text-transparent top-5 right-[101%] ">
                00{" "}
                <img
                  className="absolute top-0 rounded-full left-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1741788329599-78a29dc9286b?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </span>{" "}
              Discover{" "}
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
