import React from "react";
import "./InputWithButton.scss";
import ActionButton from "../Buttons/Actionbutton";

interface InputWithButtonProps {
  type: string;
  placeholder?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

const InputWithButton = ({
  type,
  placeholder = "",
  value,
  onChange,
  className = "",
  buttonLabel,
  onButtonClick,
}: InputWithButtonProps) => {
  return (
    <div className={`input-with-button ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
      {buttonLabel && onButtonClick && (
        <ActionButton
          label={buttonLabel}
          className="input-button"
          onClick={onButtonClick}
        />
      )}
    </div>
  );
};

export default InputWithButton;
