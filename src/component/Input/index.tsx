import React from "react";
import "./Input.scss";

interface InputProps {
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = ({
  type,
  placeholder = "",
  value,
  onChange,
  className = "",
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`dynamic-input ${className}`}
    />
  );
};

export default Input;
