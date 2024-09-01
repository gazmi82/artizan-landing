import React from "react";
import { useEffect, useState } from "react";
import "./NavBar.scss";
import LinkButton from "../Buttons/LinkButton";
import ActionButton from "../Buttons/Actionbutton";

const NavBar = (className: any) => {
  const [isSticky, setIsSticky] = useState(false);

  const handleGetQuote = () => {
    window.open("https://koalendar.com/e/meet-with-gazmir-sulcaj", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`nav flex justify-between items-center p-2  ${className} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="logo text-xl font-bold ml-4">Artizan</div>
      <div className="rightContent flex items-center w-auto mr-4">
        <LinkButton className={"mr-6"} />{" "}
        <ActionButton label={"Get a quote"} onClick={handleGetQuote} />
      </div>
    </div>
  );
};

export default NavBar;
