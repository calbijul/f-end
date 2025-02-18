import React from "react";

interface CardProps {
  size: "sm" | "lg";
  text: string;
}

const Card: React.FC<CardProps> = ({ size, text }) => {
  return (
    <div
      className={`mt-3 mb-5 ${
        size === "sm" ? "h-[200px] w-[200px]" : "h-[250px] w-[400px]"
      } bg-gray-100 p-4 rounded-sm shadow-sm border-1 border-pm-600`}
    >
      <p className="text-center text-xl">{text}</p>
    </div>
  );
};

export default Card;
