import React from "react";

const GradientCard = ({ children, className = "" }) => {
  return (
    <div className={`relative p-[1px] rounded-lg ${className}`}>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-75"></div>
      <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-lg p-6">
        {children}
      </div>
    </div>
  );
};

export default GradientCard;
