import React from "react";

interface CardProps {
  size: "sm" | "lg";
  text: string;
  image: string; 
  className?: string;
}

const ImgCard: React.FC<CardProps> = ({ size, image }) => {
  return (
    <div
      className={`mt-3 mb-5 ${
        size === "sm" ? "h-1/1 w-1/2" : "h-1/2 w-full"
      }  rounded-sm  `}
    >
      <img
        src={image}
        alt="Card Image"
        className={`w-full ${size === "sm" ? "h-[50%]" : "h-[60%]"} object-cover mb-4`}
      />
      {/* <p className="text-center text-xl">{text}</p> */}
    </div>
  );
};

export default ImgCard;