import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const About = ({ text }) => {
  return (
    <section
      id="about"
      className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <h1 className="text-6xl font-bold text-gray-50 mb-4">
        {text}
        <span className="inline-block w-8 h-[2px] bg-teal-400 ml-1 animate-pulse"></span>
      </h1>
      <h2 className="text-4xl font-bold text-gray-200 mb-6">
        Building Products People Love
      </h2>
      <p className="text-lg text-gray-300 mb-6 max-w-2xl">
        Technical leader with 8 years of experience driving product and
        engineering initiatives. Demonstrated success in driving product vision,
        leading cross-functional teams, and delivering user-centric solutions
        that drive business growth.
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
    </section>
  );
};

export default About;
