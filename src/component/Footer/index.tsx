import React, { useState, useEffect } from "react";
import "./Footer.scss";
import InputWithButton from "../InputWithButton";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { subscribeUser } from "../../redux/slices/subscribeSlice";
import { Toaster } from "../../components/ui/sonner";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

interface FooterProps {
  status: string;
  error: string | null;
}

const Footer = ({ status, error }: FooterProps) => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); // Loading state
  const dispatch: AppDispatch = useDispatch();

  // Email validation function
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    if (!email) {
      toast.error("Email is required");
      return;
    }

    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);

    setEmail(""); // Clear the input after subscribing

    dispatch(subscribeUser({ email }));
  };

  // useEffect to display success/error toasts
  useEffect(() => {
    if (status === "succeeded") {
      setLoading(false); // Stop loading after success
      toast.success("Successfully subscribed! 🎉");
    } else if (status === "failed" && error) {
      setLoading(false); // Stop loading after failure
      toast.warning("Already subscribed!");
    }
  }, [status, error]);

  return (
    <footer className="footer">
      {/* Toaster to display toast notifications */}
      <Toaster position="bottom-right" />
      <div className="footer-content">
        <div className="subscribe-section">
          <h2>Lorem Ipsum is simply dummy text</h2>
          <p>Lorem Ipsum is simply dummy text</p>
          <InputWithButton
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
            buttonLabel={loading ? <ClipLoader size={15} /> : "Subscribe"}
            onButtonClick={handleSubscribe}
            className="subscribe-form"
          />
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
