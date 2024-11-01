"use client";

import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  icon?: React.ReactNode;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label = "Button",
  type = "button",
  loading = false,
  disabled = false,
  onClick,
  icon,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`px-4 py-2 rounded-lg bg-[#6F018D] text-white font-semibold hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    >
      {loading ? (
        <AiOutlineLoading className="animate-spin" size={20} />
      ) : (
        <div className="flex gap-2 items-center justify-center">
          {icon} {label}
        </div>
      )}
    </button>
  );
};

export default Button;
