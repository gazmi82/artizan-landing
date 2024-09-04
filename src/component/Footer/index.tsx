import React, { useState } from "react";
import "./Footer.scss";
import InputWithButton from "../InputWithButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { subscribeUser } from "../../redux/slices/subscribeSlice";

interface FooterProps {
  status: string;
  error: string | null;
}

const Footer = ({ status, error }: FooterProps) => {
  const [email, setEmail] = useState<string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleSubscribe = () => {
    if (email) {
      dispatch(subscribeUser({ email }));
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="subscribe-section">
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>Lorem Ipsum is simply dummy text</p>
          <InputWithButton
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            buttonLabel="Subscribe"
            onButtonClick={handleSubscribe}
            className="subscribe-form"
          />
          {status === "failed" && <p className="error-message">{error}</p>}
          {status === "succeeded" && (
            <p className="success-message">Successfully subscribed!</p>
          )}
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="footer-text">
            <p>artizan</p>
            <p>&copy; 2023 Artizan. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
