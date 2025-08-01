import React from "react";
import Title from "../../Help/Title";
import ProjectCard from "./ProjectCard";
import { projects } from "./Projectsarray";

const Projects = () => {
  return (
    <>
      <Title>Projetos</Title>
      <section className="bg-black">
        <div className="max-h-max md:max-w-[1344px] md:grid  md:jusitify-center md:m-auto">
          <ProjectCard projects={projects} />
        </div>
      </section>
    </>
  );
};

export default Projects;
