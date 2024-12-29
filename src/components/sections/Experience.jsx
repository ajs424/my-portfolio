import React from "react";
import { FileText } from "lucide-react";
import { experiences } from "../../data/portfolioData";

const Experience = () => {
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
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-indigo-200 pl-4">
            <h3 className="text-xl font-bold text-gray-50">{exp.title}</h3>
            <p className="text-indigo-200 mb-2">{exp.company}</p>
            <p className="text-sm mb-4 text-gray-400">{exp.period}</p>
            <p className="text-gray-300 mb-4">{exp.summary}</p>
            <div className="space-y-4">
              {exp.points.map((point, idx) => (
                <div key={idx} className="space-y-1">
                  <h4 className="text-base font-medium text-indigo-300">
                    {point.highlight}
                  </h4>

                  {/* {point.highlight}
                  </h4> */}
                  <p className="text-gray-300">{point.description}</p>
                </div>
              ))}
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

export default Experience;
