import React from "react";
import "./ActionButton.scss";

const ActionButton = (className: any) => {
  return (
    <div className={`btn p-2 w-32  rounded-full ${className}`}>Subscribe</div>
  );
};

export default ActionButton;
