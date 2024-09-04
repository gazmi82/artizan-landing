import React from "react";
import "./ActionButton.scss";

interface ActionButtonProps {
  label: string;
  className?: string; // className is optional, default to empty string
  onClick?: () => void;
}

const ActionButton = ({
  label,
  className = "",
  onClick,
}: ActionButtonProps) => {
  return (
    <div className={`btn p-2 w-32 rounded-full ${className}`} onClick={onClick}>
      {label}
    </div>
  );
};

export default ActionButton;
