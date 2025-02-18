import React from "react";

interface CardProps {
  size: "sm" | "lg";
  text: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ size, text, image }) => {
  return (
    <div
      className={`mt-3 mb-5 ${
        size === "sm" ? "h-[200px] w-[200px]" : "h-[250px] w-[400px]"
      } bg-gray-100 p-4 rounded-sm shadow-sm border-1 border-pm-600`}
    >
      <img
        src={image}
        alt="Card Image"
        className={`w-full h-[50%] object-cover rounded-sm mb-4`} 
      />
      <p className="text-center text-xl">{text}</p>
    </div>
  );
};

export default Card;
