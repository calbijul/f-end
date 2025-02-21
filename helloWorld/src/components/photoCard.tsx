import React from "react";

interface CardProps {
  size: "sm" | "md" | "lg";

  image: string;
  className?: string;  
}

const PhotoCard: React.FC<CardProps> = ({ size,  image, className = "" }) => {
  const sizeClasses = {
    sm: "w-60 h-90",
    md: "w-48 h-48",
    lg: "w-72 h-72",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img className={`${sizeClasses[size]} object-cover`} src={image} />

    </div>
  );
};

export default PhotoCard;
