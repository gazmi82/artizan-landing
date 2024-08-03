import React from "react";
import "./Home.scss";
import { png } from "../../assets/SectionOne";
import NavBar from "../../components/NavBar";

const HomePage = () => {
  return (
    <>
      <div className="home pt-6 flex justify-between m-auto">
        <div className="navPosition">
          <NavBar />
        </div>
        <div className="header-text">
          Lorem Ipsum <span>dummy text</span> of printing industry.
        </div>
        <div className="home-content-container ">
          <div>
            <img src={png.HomeImage} alt="#" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
