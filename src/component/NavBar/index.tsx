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
    <div className={`nav ${className} ${isSticky ? "sticky" : ""}`}>
      <div className="content flex justify-between items-center p-2.5">
        <div className="text-xl font-bold">Artizan</div>
        <div className="flex items-center w-auto">
          <LinkButton className={"mr-6"} />
          <ActionButton label={"Get a quote"} onClick={handleGetQuote} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
