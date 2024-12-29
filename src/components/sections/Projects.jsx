import React from "react";
import GradientCard from "../ui/GradientCard";
import { projects } from "../../data/portfolioData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-50 mb-4">
        Product Initiatives
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <GradientCard
            key={index}
            className="hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-50 mb-2">
                  {project.title}
                </h3>
                <span className="inline-block px-3 py-1 text-sm rounded-full bg-gradient-to-r from-purple-500/20 to-teal-500/20 text-gray-50">
                  {project.status}
                </span>
              </div>
            </div>
            <p className="mb-6 text-gray-300">{project.description}</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-50 mb-2">
                  Process
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-gray-300"
                    >
                      <span className="text-teal-300 mr-2">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-50 mb-2">
                  Impact
                </h4>
                <p className="text-sm text-teal-200">{project.impact}</p>
              </div>
            </div>
          </GradientCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
