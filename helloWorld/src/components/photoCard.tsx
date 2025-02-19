import React from "react";

interface CardProps {
  size: "sm" | "md" | "lg"; 
  text: string;
  image: string; 
}

const PhotoCard: React.FC<CardProps> = ({ size, text, image }) => {

  const sizeClasses = {
    sm: "w-60 h-90", 
    md: "w-48 h-48", 
    lg: "w-72 h-72", 
  };

  return (
    <div className="flex flex-col items-center">
      <img className={`${sizeClasses[size]} object-cover`} src={image} alt={text} />
    
    </div>
  );
};

export default PhotoCard;
