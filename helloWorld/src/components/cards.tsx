import React from "react";

interface CardProps {
  size: "sm" | "lg";
  text: string;
}

const Card: React.FC<CardProps> = ({ size, text }) => {
  return (
    <div
      className={`mt-3 mb-5 ${
        size === "sm" ? "h-[300px] w-[400px]" : "h-[350px] w-[450px]"
      } bg-gray-100 p-4 rounded-sm shadow-sm border border-pm-300`}
    >
      <p className="text-center text-xl">{text}</p>
    </div>
  );
};

export default Card;
