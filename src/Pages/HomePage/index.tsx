import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Home.scss";
import { png } from "../../assets/SectionOne";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import SimpleCardIcon from "../../component/Card";
import Tablet from "../../component/Tablet";

const HomePage = () => {
  const { status, error } = useSelector((state: RootState) => state.subscribe);

  // State for the currently selected card and image
  const [currentImage, setCurrentImage] = useState<string>(png.Auth);
  const [selectedCard, setSelectedCard] = useState<string>("auth"); // Default card selected

  // Handle changing the image and selecting a card
  const handleImageChange = (newImage: string, cardName: string) => {
    setCurrentImage(newImage);
    setSelectedCard(cardName); // Update selected card
  };

  return (
    <>
      {/* First section with header */}
      <section className="home pt-6 flex justify-between m-auto">
        <div className="navPosition">
          <NavBar />
        </div>
        <div className="header-text">
          Lorem Ipsum <span>dummy text</span> of the printing industry.
        </div>
        <div className="home-content-container">
          <div>
            <img src={png.HomeImage} alt="Home" />
          </div>
        </div>
      </section>

      {/* Second section with SimpleCardIcons and dynamic image */}
      <section className="flex justify-between mx-auto items-center max-w-screen-2xl mb-28">
        {/* Left side with SimpleCardIcons */}
        <div className="left-block max-w-lg mr-10">
          <div className="header-text font-bold text-4xl">
            Lorem Ipsum <span className="text-purple-600">dummy text</span> of
            the printing industry.
          </div>

          <div className="my-10">
            {/* First SimpleCardIcon */}
            <SimpleCardIcon
              image={png.Tools}
              size={38}
              className="py-3"
              selected={selectedCard === "auth"} // Pass the selected state
              onClick={() => handleImageChange(png.Auth, "auth")}
            />
            {/* Second SimpleCardIcon */}
            <SimpleCardIcon
              image={png.Tools}
              size={38}
              className="py-3"
              selected={selectedCard === "creatorHome"} // Pass the selected state
              onClick={() => handleImageChange(png.CreatorHome, "creatorHome")}
            />
            {/* Third SimpleCardIcon */}
            <SimpleCardIcon
              image={png.Tools}
              size={38}
              className="py-3"
              selected={selectedCard === "liveSession"} // Pass the selected state
              onClick={() => handleImageChange(png.LiveSession, "liveSession")}
            />
          </div>
        </div>

        {/* Right side with dynamic image */}
        <div className="right-block">
          <Tablet imageSrc={currentImage} altText="Dynamic Right Side Image" />
        </div>
      </section>

      {/* Footer */}
      <Footer status={status} error={error} />
    </>
  );
};

export default HomePage;
