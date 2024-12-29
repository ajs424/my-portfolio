import React from "react";
import GradientCard from "../ui/GradientCard";
import { coreCompetencies, technicalSkills } from "../../data/portfolioData";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Competencies Card */}
        <div className="relative p-[1px] rounded-lg h-full">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-75"></div>
          <div className="relative bg-[#0f1117] rounded-lg p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Core Competencies
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {coreCompetencies.map((skill, index) => (
                <div key={index} className="flex items-start text-gray-300">
                  <span className="text-teal-300 mr-2">▹</span>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Skills Card */}
        <div className="relative p-[1px] rounded-lg h-full">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-75"></div>
          <div className="relative bg-[#0f1117] rounded-lg p-6 h-full">
            <h3 className="text-xl font-bold text-white mb-4">
              Technical Skills
            </h3>
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h4 className="text-sm font-semibold text-white mb-2">
                  {category}
                </h4>
                <p className="text-gray-300">{skills}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
