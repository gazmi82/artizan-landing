// import React from "react";
// import "./Tablet.scss"; // Assuming SCSS for additional styling if needed

// interface TabletProps {
//   imageSrc: string;
//   altText: string;
// }

// const Tablet = ({ imageSrc, altText }: TabletProps) => {

//   return (
//     <div className="right-image-container">
//       <img
//         src={imageSrc}
//         alt={altText}
//         className="right-image-content border-gray-200 border-4 rounded-3xl p-3"
//       />
//     </div>
//   );
// };

// export default Tablet;
import { useState, useEffect } from "react";
import "./Tablet.scss"; // Assuming SCSS for additional styling if needed

interface TabletProps {
  imageSrc: string;
  altText: string;
}

const Tablet = ({ imageSrc, altText }: TabletProps) => {
  const [isFading, setIsFading] = useState<boolean>(false);

  // Trigger the fade-in transition whenever the imageSrc changes
  useEffect(() => {
    setIsFading(true); // Set to true to start fade-in
    const timeout = setTimeout(() => {
      setIsFading(false); // End fade-in after 300ms
    }, 300); // Match the duration of the CSS transition
    return () => clearTimeout(timeout); // Clean up timeout on component unmount
  }, [imageSrc]);
  return (
    <div className="right-image-container">
      <img
        src={imageSrc}
        alt={altText}
        className={`right-image-content border-gray-200 border-4 rounded-3xl p-3 transition-opacity duration-300 ease-in-out ${
          isFading ? "fade-in" : ""
        }`}
      />
    </div>
  );
};

export default Tablet;
