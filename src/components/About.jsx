import React from "react";
import AboutTitle from "./AboutTitle";
import AboutVid from "../assets/about.mp4";

const About = () => {
  return (
    <div id="about" className="bg-slate-200">
      <AboutTitle />
      <div className="video grid gap-8 grid-cols-1 md:grid-cols-2 ">
        <video
          src={AboutVid}
          alt="aboutvid"
          autoPlay
          loop
          muted
          className="px-8 py-8 object-cover md:pt-14 lg:pt-0 shadow-sm"
        />

        <section>
          <h1
            className="text-slate-900 font-extrabold 
          border-b  text-3xl md:6xl px-8"
          >
            We Discuss Your Idea in Real Time And Make it Real
          </h1>
          <p className="space-y-4 text-slate-800 text-justify leading-relaxed font-normal tracking-wide md:text-xl lg:2xl px-8 py-4">
            &nbsp;&nbsp;&nbsp;&nbsp;At BonDevOps, we work closely with you to
            build a website that meets your exact needs. Through real-time
            collaboration, we discuss your vision and desired features to
            deliver a tailored, feature-rich, and visually stunning site. Our
            goal is to create a web presence that aligns with your business and
            engages your audience effectively.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
