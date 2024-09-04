import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./LoadingSpinner.scss";

interface LoadingSpinnerProps {
  loading?: boolean; // Whether the spinner is visible (default: true)
  color?: string; // Color of the spinner (default: 'red')
  size?: number; // Size of the spinner (default: 20)
  speedMultiplier?: number; // Speed of the spinner (default: 0.6)
  cssOverride?: React.CSSProperties; // Custom CSS overrides
  message?: string; // Optional loading message
  className?: string; // Additional custom class names
}

const LoadingSpinner = ({
  loading = true,
  color = "red",
  size = 20,
  speedMultiplier = 0.6,
  cssOverride = {},
  message = "",
  className = "",
}: LoadingSpinnerProps) => {
  if (!loading) return null;

  return (
    <div className={`loading-spinner-overlay ${className}`}>
      <div className="loading-spinner-content">
        <ClipLoader
          color={color}
          loading={loading}
          size={size}
          speedMultiplier={speedMultiplier}
          cssOverride={cssOverride}
        />
        {message && <p className="loading-message">{message}</p>}
      </div>
    </div>
  );
};

export default LoadingSpinner;
