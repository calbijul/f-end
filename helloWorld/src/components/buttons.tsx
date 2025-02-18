import React from "react";

interface ButtonProps {
  size: "sm" | "lg";
  text: string;
}

const Button: React.FC<ButtonProps> = ({ size, text }) => {
  return (
    <div>
      <button
        className={`bg-pm-600 text-sm rounded-sm font-outfit text-nt-white mt-3 mb-2 hover:bg-pm-300 ${
          size === "sm" ? "h-[40px] w-[119px]" : "h-[50px] w-[150px]"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
