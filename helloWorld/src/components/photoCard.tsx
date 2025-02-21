import React from "react";

interface CardProps {
  size: "sm" | "md" | "lg";

  image: string;
  className?: string;  
}

const PhotoCard: React.FC<CardProps> = ({ size,  image, className = "" }) => {
  const sizeClasses = {
    sm: "w-70 h-100",
    md: "w-58 h-58",
    lg: "w-82 h-82",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img className={`${sizeClasses[size]} object-cover`} src={image} />

    </div>
  );
};

export default PhotoCard;
