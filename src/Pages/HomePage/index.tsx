import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.scss";
import { png } from "../../assets/SectionOne";
import NavBar from "../../component/NavBar";
import Footer from "../../component/Footer";
import SimpleCardIcon from "../../component/Card";
import Tablet from "../../component/Tablet";

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const { status, error } = useSelector((state: RootState) => state.subscribe);

  // State for the currently selected card and image
  const [currentImage, setCurrentImage] = useState<string>(png.Auth);
  const [selectedCard, setSelectedCard] = useState<string>("auth"); // Default card selected

  const secondSectionRef = useRef<HTMLDivElement | null>(null); // Ref for the second section
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]); // Refs for each card
  const imageRef = useRef<HTMLDivElement | null>(null); // Ref for the image section

  // Function to handle image and card changes
  const handleImageChange = (newImage: string, cardName: string) => {
    setCurrentImage(newImage); // Directly change the image
    setSelectedCard(cardName); // Update selected card
  };

  useEffect(() => {
    if (!secondSectionRef.current || !cardRefs.current) return;

    // Pin the entire second section when it enters the viewport
    ScrollTrigger.create({
      trigger: secondSectionRef.current,
      start: "top top", // Pin when the top of the second section hits the top of the viewport
      end: "+=50%", // Stay pinned for 200% of the section's height
      pin: secondSectionRef.current, // Pin the entire section
      pinSpacing: false,
    });

    // Trigger image changes only after the section is fully pinned
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card,
        start: "top+=350% center", // Ensure this starts only after the section is pinned
        onEnter: () => {
          // Change the image when the card comes into view
          if (index === 0) handleImageChange(png.Auth, "auth");
          if (index === 1) handleImageChange(png.CreatorHome, "creatorHome");
          if (index === 2) handleImageChange(png.LiveSession, "liveSession");
        },
        onEnterBack: () => {
          // Ensure the image changes when scrolling back up
          if (index === 0) handleImageChange(png.Auth, "auth");
          if (index === 1) handleImageChange(png.CreatorHome, "creatorHome");
          if (index === 2) handleImageChange(png.LiveSession, "liveSession");
        },
      });
    });

    // Cleanup ScrollTriggers on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* First section with header */}
      <section className="home pt-6 flex justify-between m-auto">
        <div className="navPosition">
          <NavBar />
        </div>
        <div className="header-text pt-16">
          Lorem Ipsum <span>dummy text</span> of the printing industry.
        </div>
        <div className="home-content-container">
          <div>
            <img src={png.HomeImage} alt="Home" />
          </div>
        </div>
      </section>

      {/* Second section with SimpleCardIcons and dynamic image */}
      <section
        className="flex justify-between mx-auto items-center max-w-screen-2xl py-28"
        ref={secondSectionRef}
      >
        <div className="left-block max-w-lg mr-10 ">
          <div className="header-text text-left font-bold text-4xl">
            Lorem Ipsum <span className="text-purple-600">dummy text</span> of
            the printing industry.
          </div>

          <div className="my-10">
            {/* First SimpleCardIcon */}
            <div ref={(el) => (cardRefs.current[0] = el)}>
              <SimpleCardIcon
                image={png.Tools}
                size={38}
                className="py-3"
                selected={selectedCard === "auth"}
                onClick={() => handleImageChange(png.Auth, "auth")}
              />
            </div>

            {/* Second SimpleCardIcon */}
            <div ref={(el) => (cardRefs.current[1] = el)}>
              <SimpleCardIcon
                image={png.Tools}
                size={38}
                className="py-3"
                selected={selectedCard === "creatorHome"}
                onClick={() =>
                  handleImageChange(png.CreatorHome, "creatorHome")
                }
              />
            </div>

            {/* Third SimpleCardIcon */}
            <div ref={(el) => (cardRefs.current[2] = el)}>
              <SimpleCardIcon
                image={png.Tools}
                size={38}
                className="py-3"
                selected={selectedCard === "liveSession"}
                onClick={() =>
                  handleImageChange(png.LiveSession, "liveSession")
                }
              />
            </div>
          </div>
        </div>

        {/* Left side with SimpleCardIcons */}

        {/* Right side with dynamic image */}
        <div className="right-block" ref={imageRef}>
          <Tablet imageSrc={currentImage} altText="Dynamic Right Side Image" />
        </div>
      </section>

      {/* Adding Extra Space to Prevent Overlap with Footer */}
      <section className="extra-space-section">
        {/* Blank space or extra content here */}
      </section>

      <section className="bg-white py-16">
        <div className="header-text text-center pt-16">
          Lorem Ipsum dummy text of the printing industry.
        </div>
        <div className="flex justify-between mx-auto items-start max-w-screen-2xl py-16 gap-6">
          {/* Card 1 */}
          <div className="max-w-xs w-full overflow-hidden">
            <img
              src={png.Category1}
              className="w-full h-auto object-cover"
              alt="Category 1"
            />
            <div className="py-4">
              <h2 className="text-left text-base font-semibold mb-2">
                Lorem Ipsum is simply dummy text of the printing industry.
              </h2>
              <p className="text-left text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="max-w-xs w-full overflow-hidden">
            <img
              src={png.Category2}
              className="w-full h-auto object-cover"
              alt="Category 2"
            />
            <div className="py-4">
              <h2 className="text-left text-base font-semibold mb-2">
                Lorem Ipsum is simply dummy text of the printing industry.
              </h2>
              <p className="text-left text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="max-w-xs w-full overflow-hidden">
            <img
              src={png.Category3}
              className="w-full h-auto object-cover"
              alt="Category 3"
            />
            <div className="py-4">
              <h2 className="text-left text-base font-semibold mb-2">
                Lorem Ipsum is simply dummy text of the printing industry.
              </h2>
              <p className="text-left text-gray-600 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer status={status} error={error} />
    </>
  );
};

export default HomePage;
