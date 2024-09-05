import React from "react";
import "./InputWithButton.scss";
import { Button } from "../../components/ui/button";

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
        <Button className="input-button" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default InputWithButton;
