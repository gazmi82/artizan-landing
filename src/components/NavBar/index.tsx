import React from "react";
import { useEffect, useState } from "react";
import "./NavBar.scss";
import LinkButton from "../Buttons/LinkButton";
import ActionButton from "../Buttons/Actionbutton";
import Input from "../Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { subscribeUser } from "../../redux/slices/subscribeSlice";

const NavBar = (className: any) => {
  const [isSticky, setIsSticky] = useState(false);
  const [email, setEmail] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();
  const { status, error } = useSelector((state: RootState) => state.subscribe);

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

  const handleSubscribe = () => {
    if (email) {
      dispatch(subscribeUser({ email }));
    }
  };

  return (
    <div
      className={`nav flex justify-between items-center p-2  ${className} ${
        isSticky ? "sticky" : ""
      }`}
    >
      <div className="logo text-xl font-bold ml-4">Artizan</div>
      <div className="rightContent flex items-center w-auto mr-4">
        <LinkButton className={"mr-6"} />{" "}
        <Input
          type={email}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <ActionButton
          label={status === "loading" ? "Subscribing..." : "Subscribe"}
          onClick={handleSubscribe}
        />
      </div>
    </div>
  );
};

export default NavBar;
