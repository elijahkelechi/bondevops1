import React from "react";
import { projects } from "../data";
import ProjectCards from "./ProjectCards";
import ProjectTitle from "./ProjectTitle";

const Projects = () => {
  return (
    <div id="projects" className="bg-slate-50">
      <ProjectTitle />
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          return <ProjectCards key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
