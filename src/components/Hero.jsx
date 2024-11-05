import React from "react";

import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import img from "../assets/myhero.svg";

const Hero = () => {
  document.addEventListener("scroll", function () {
    const element = document.getElementById("myElement");
    const scrollHeight = window.scrollY || document.documentElement.scrollTop;
    if (scrollHeight > 50) {
      element.style.transform = "rotate(-40deg)";
    } else if (scrollHeight > 30) {
      element.style.transform = "rotate(-35deg)";
    } else if (scrollHeight > 20) {
      element.style.transform = "rotate(-30deg)";
    } else if (scrollHeight > 10) {
      element.style.transform = "rotate(-32deg)";
    } else {
      element.style.transform = "rotate(0deg)";
    }

    if (scrollHeight > 50) {
      element.classList.add("opacity-0");
    } else {
      element.classList.remove("opacity-0");
    }
  });
  return (
    <div
      id="home"
      className=" relative w-full h-screen overflow-hidden sm:overflow-hidden"
    >
      <video
        src="/bgvideo.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        alt="bcg video"
      />
      <div
        className="select-none relative z-10 flex-row items-center
       justify-start text-left h-auto py-40 px-8 md:16 sm:px-12 box-border
       md:grid-cols-2"
      >
        <h1 className="text-white sm:tracking-wide md:tracking-widest sm:text-5xl text-4xl sm:font-bold font-semibold ">
          <span>Bringing Your Dream</span>
          <span className="md:block block  "> </span>
          <span className="md:block block"> </span>
          <span className="sm:block">Website to Reality</span>
          <span className="md:block sm:block"> </span>
        </h1>
        <section className="h-auto md:max-w-md max-h-screen ">
          <div className="md:pt-8 pb-6 py-2  pr-10 ">
            <p className=" text-slate-50 font-medium text-sm md:text-xl sm:text-wrap overflow-hidden">
              Explore our portfolio to see how we bring your vision to life with
              web development and DevOps solutions.
            </p>
          </div>
        </section>
        <div className="icons flex gap-x-4">
          <a target="_blank" href="https://github.com/elijahkelechi/">
            <FaGithubSquare
              className="text-4xl md:text-4xl text-emerald-500
            hover:text-emerald-300 duration-200"
            />
          </a>
          <a
            target="blank"
            href="https://ng.linkedin.com/in/thankgod-nwankwo-85267a296"
          >
            <FaLinkedin
              className="text-4xl md:text-4xl text-emerald-500
             hover:text-emerald-300 duration-200"
            />
          </a>
          <a
            target="_blank"
            href="https://x.com/boncodes?t=g8jlD87b6ByfFRVJ14Zy9A&s=08"
          >
            <FaTwitterSquare
              className="text-4xl md:text-4xl text-emerald-500
             hover:text-emerald-300 duration-200"
            />
          </a>
        </div>

        <div
          id="myElement"
          className="hidden md:flex fixed top-40 right-10
         text-white p-4 transition-opacity duration-300 overflow-hidden"
        >
          <img src={img} alt="Hero image" className="h-80 overflow-hidden" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
    </div>
  );
};

export default Hero;
