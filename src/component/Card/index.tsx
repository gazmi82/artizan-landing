import React, { useState } from "react";
import { Card, CardTitle } from "../../components/ui/card";
import "./Card.scss"; // Assuming additional styles for Card component

interface SimpleCardIconProps {
  onClick?: () => void; // Click handler function
  size?: number; // Size of the image/icon
  cssOverride?: React.CSSProperties; // Custom CSS overrides
  className?: string; // Additional custom class names
  image?: string | React.ReactNode; // Can be a URL or React component
  selected?: boolean; // New selected prop to handle selected state
}

const SimpleCardIcon = ({
  className,
  onClick,
  cssOverride,
  size = 24, // Default size of the icon
  image,
  selected = false, // Default selected state is false
}: SimpleCardIconProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false); // Manage hover state

  // Handlers for mouse hover
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseOut = () => setIsHovered(false);

  return (
    <div
      className={`simple-card-icon ${className || ""}`}
      style={cssOverride}
      onClick={onClick}
    >
      <Card
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className={`p-8 shadow-md flex rounded-md items-center justify-center transition-all duration-200 cursor-pointer max-w-md  ${
          selected || isHovered ? "bg-white shadow-lg" : "bg-white border-none"
        }`}
      >
        <div className="flex items-center gap-5">
          {/* Render the image/icon when hovered or when selected */}
          {(isHovered || selected) && (
            <div
              className="flex items-center justify-center"
              style={{ width: `${size}px`, height: `${size}px` }}
            >
              {typeof image === "string" ? (
                <img
                  src={image}
                  alt="Card Icon"
                  className="block"
                  style={{ width: `${size}px`, height: `${size}px` }}
                />
              ) : (
                image // Render React component if passed
              )}
            </div>
          )}

          <CardTitle
            className={`text-base transition-colors font-normal ${
              selected || isHovered ? "text-purple-600" : "text-black"
            }`}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </CardTitle>
        </div>
      </Card>
    </div>
  );
};

export default SimpleCardIcon;
