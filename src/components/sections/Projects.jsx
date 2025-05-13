import React from "react";
import ProjectList from "../ProjectList";
import RevealOnScroll from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectList projectName = "Cloud Platform"/>
          <ProjectList projectName = "BlockChain Web App"/>
          <ProjectList projectName = "Movie App" link = "https://movies-007.netlify.app"/>
          <ProjectList projectName = "E-commerce Website"/>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
