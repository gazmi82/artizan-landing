import React from "react";

interface LinkButtonProps {
  className: string;
}

const LinkButton = ({ className }: LinkButtonProps) => {
  return <div className={`${className}`}>LinkButton</div>;
};

export default LinkButton;
