import React, { useState } from "react";
import { FileText } from "lucide-react";
import { experiences } from "../../data/portfolioData";
import {
  ChevronRight,
  //Users,
  TrendingUp,
  Layout,
  GitMerge,
} from "lucide-react";

const ExperienceSection = () => {
  const [expandedCompany, setExpandedCompany] = useState(null);

  const handleCardClick = (companyName) => {
    setExpandedCompany(expandedCompany === companyName ? null : companyName);
  };

  const handleDownloadResume = () => {
    window.open("/AShastriResume.pdf", "_blank");
  };

  return (
    <section
      id="experience"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-50 mb-8">
        Where I've Worked
      </h2>
      <div className="grid gap-8">
        {experiences.map((exp) => (
          <div key={exp.company} className="relative">
            <div
              className="relative p-[1px] rounded-lg cursor-pointer group"
              onClick={() => handleCardClick(exp.company)}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-75"></div>

              {/* Content */}
              <div className="relative bg-[#0f1117] rounded-lg p-6">
                {/* Header Section */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 bg-white rounded-lg p-1 flex-shrink-0">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-50">
                          {exp.company}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {exp.roles[exp.roles.length - 1].period.split("—")[0]}{" "}
                          — {exp.roles[0].period.split("—")[1]}
                        </p>
                      </div>
                      <ChevronRight
                        className={`text-gray-400 transition-transform duration-300 ${
                          expandedCompany === exp.company ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                    <p className="text-gray-300 mt-2">{exp.summary}</p>
                  </div>
                </div>

                {/* Quick Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-black/20 rounded-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-indigo-300" size={20} />
                    <span className="text-gray-300 text-sm">
                      {exp.metrics.teamSize}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layout className="text-indigo-300" size={20} />
                    <span className="text-gray-300 text-sm">
                      {exp.metrics.userBase}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="text-indigo-300" size={20} />
                    <span className="text-gray-300 text-sm">
                      {exp.metrics.impact}
                    </span>
                  </div>
                </div>

                {/* Expandable Role Details */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCompany === exp.company
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="space-y-8">
                    {exp.roles.map((role, roleIndex) => (
                      <div key={roleIndex} className="relative pl-6">
                        {/* Timeline connector */}
                        {roleIndex !== exp.roles.length - 1 && (
                          <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-indigo-500 to-transparent"></div>
                        )}

                        {/* Role Content */}
                        <div className="relative">
                          {/* Timeline dot */}
                          {/* <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div> */}

                          <h4 className="text-lg font-semibold text-gray-50 mb-1">
                            {role.title}
                          </h4>
                          <p className="text-sm text-gray-400 mb-2">
                            {role.period}
                          </p>
                          <p className="text-indigo-200 text-sm mb-4">
                            {role.focus}
                          </p>

                          {/* Product Highlights */}
                          <div className="space-y-6">
                            {role.productHighlights.map((highlight, idx) => (
                              <div
                                key={idx}
                                className="bg-black/20 rounded-lg p-4"
                              >
                                <h5 className="text-base font-semibold text-gray-50 mb-2">
                                  {highlight.title}
                                </h5>
                                <p className="text-gray-300 mb-4">
                                  {highlight.description}
                                </p>

                                {/* Process and Impact Grid */}
                                <div className="grid md:grid-cols-2 gap-4">
                                  <div>
                                    <h6 className="text-sm font-semibold text-indigo-200 mb-2">
                                      Product Process
                                    </h6>
                                    <ul className="space-y-1">
                                      {highlight.process.map(
                                        (step, stepIdx) => (
                                          <li
                                            key={stepIdx}
                                            className="flex items-start text-sm text-gray-300"
                                          >
                                            <span className="text-indigo-300 mr-2">
                                              ▹
                                            </span>
                                            {step}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                  <div>
                                    <h6 className="text-sm font-semibold text-indigo-200 mb-2">
                                      Business Impact
                                    </h6>
                                    <ul className="space-y-1">
                                      {highlight.impact.map(
                                        (impact, impactIdx) => (
                                          <li
                                            key={impactIdx}
                                            className="flex items-start text-sm text-gray-300"
                                          >
                                            <span className="text-teal-300 mr-2">
                                              ▹
                                            </span>
                                            {impact}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleDownloadResume}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-950 text-white rounded-lg transition-all border border-indigo-800 hover:border-indigo-600 hover:shadow-[0_0_10px_rgba(79,70,229,0.2)]"
        >
          <FileText size={20} />
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default ExperienceSection;
