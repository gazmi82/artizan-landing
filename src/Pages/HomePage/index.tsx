import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./Home.scss";
import { png } from "../../assets/SectionOne";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const HomePage = () => {
  const { status, error } = useSelector((state: RootState) => state.subscribe);
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
      <Footer status={status} error={error} />
    </>
  );
};

export default HomePage;
