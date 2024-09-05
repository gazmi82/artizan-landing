import { useEffect, useState } from "react";
import "./NavBar.scss";
import { Button } from "../../components/ui/button"; // Assuming shadcn Button is located here

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
          {/* <LinkButton className={"mr-6"} /> */}
          <Button variant="link" className="mr-6 text-base">
            LoreIpsum
          </Button>

          {/* Replacing ActionButton with shadcn/ui Button */}
          <Button
            onClick={handleGetQuote}
            className="bg-violet-500 hover:bg-violet-700 text-white rounded-full"
          >
            Get a quote
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
