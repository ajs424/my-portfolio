import React, { useState } from "react";
import { Menu } from "lucide-react";
import { navigationLinks } from "../../data/portfolioData";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-50">
              Aalap Shastri
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-200 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base text-gray-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
