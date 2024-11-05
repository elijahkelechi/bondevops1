import React from "react";

const ProjectCards = ({ img, title, text, url }) => {
  return (
    <div
      style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
      id="projects"
      className="relative py-8 px-8 my-10 mx-8 bg-white rounded-lg shadow-
     hover:shadow-2xl duration-300"
    >
      <img src={img} alt={title} className="w-full boject-cover rounded-t-lg" />
      <div className="content-center px-0 md:px-2 capitalize">
        <h2 className="text-center font-semibold text-xl py-2">{title}</h2>
        <p className="text-left md:text-xl text-slate-800 md:tracking-wide leading-loose">
          {text}
        </p>
      </div>
      <section>
        <button
          style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.25)" }}
          className="flex content-center rounded-sm 
        mx-auto mb-8 mt-6 px-8 py-2 relative
         bg-emerald-500 text-slate-50 hover:bg-emerald-400 active:bg-emerald-300"
        >
          <a href={url} target="_blank" className="text-xl font-bold">
            Explore Now
          </a>
        </button>
      </section>
    </div>
  );
};

export default ProjectCards;
