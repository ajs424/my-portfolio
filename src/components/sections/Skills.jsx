import React from "react";
import GradientCard from "../ui/GradientCard";
import { coreCompetencies, technicalSkills } from "../../data/portfolioData";

const Skills = () => {
  // Split core competencies into two categories
  const strategySkills = coreCompetencies
    .filter((skill) =>
      [
        "Product Strategy",
        "Roadmap Development",
        "Cross-functional Leadership",
        "Stakeholder Management",
        "Data-Driven Decision Making",
      ].includes(skill)
    )
    .join(", ");

  const developmentSkills = coreCompetencies
    .filter((skill) =>
      [
        "User Experience Enhancement",
        "Software Project Management",
        "Agile Methodologies",
        "System Architecture & Design",
      ].includes(skill)
    )
    .join(", ");

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
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">
                  Strategy & Leadership
                </h4>
                <p className="text-gray-300">{strategySkills}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">
                  Development & Design
                </h4>
                <p className="text-gray-300">{developmentSkills}</p>
              </div>
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
            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {category}
                  </h4>
                  <p className="text-gray-300">{skills}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
