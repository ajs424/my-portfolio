import React, { useState, useEffect } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

const Portfolio = () => {
  const [text, setText] = useState("");
  const fullText = "Hello World";
  const typingSpeed = 150;

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-800 text-gray-100">
      <Navigation />

      <main className="pt-16">
        <About text={text} />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />

      <style jsx global>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-pulse {
          animation: pulse 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
