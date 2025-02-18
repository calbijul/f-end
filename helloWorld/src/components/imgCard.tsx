import React from "react";

interface CardProps {
  size: "sm" | "lg";
  text: string;
  image: string; 
}

const ImgCard: React.FC<CardProps> = ({ size, text, image }) => {
  return (
    <div
      className={`mt-3 mb-5 ${
        size === "sm" ? "h-[200px] w-[200px]" : "h-[250px] w-[400px]"
      } bg-gray-100 p-1 rounded-sm shadow-sm border border-pm-100 `}
    >
      <img
        src={image}
        alt="Card Image"
        className={`w-full ${size === "sm" ? "h-[50%]" : "h-[60%]"} object-cover rounded-sm mb-4`}
      />
      <p className="text-center text-xl">{text}</p>
    </div>
  );
};

export default ImgCard;