import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const About = ({ text }) => {
  return (
    <section
      id="about"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Main container with side-by-side layout on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Text content container */}
        <div>
          <h1 className="text-6xl font-bold text-gray-50 mb-4">
            {text}
            <span className="inline-block w-8 h-[2px] bg-teal-400 ml-1 animate-pulse"></span>
          </h1>
          <h2 className="text-4xl font-bold text-gray-200 mb-6">
            I'm Aalap 👋🏽
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Technical roots, product mindset. My journey from engineering to
            product has taught me one thing: great products happen when
            technical excellence meets user empathy. For 8+ years, I've been
            bringing these worlds together, helping build, ship, and manage
            products users can't wait to use.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/ajs424"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-50"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/aalapshastri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aalapjshastri@gmail.com"
              className="text-gray-300 hover:text-gray-50"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Photo Container */}
        <div className="relative w-full max-w-sm mx-auto md:mt-16">
          <div className="relative p-[1px] rounded-full overflow-hidden aspect-square">
            {/* Gradient Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-75"></div>

            {/* Image Container */}
            <div className="relative bg-[#0f1117] rounded-full overflow-hidden aspect-square">
              <img
                src="/profile-picture.JPG"
                alt="Aalap Shastri"
                className="w-full h-full object-cover object-top hover:scale-105 hover:grayscale transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
