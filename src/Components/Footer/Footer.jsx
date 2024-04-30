import React from "react";
import "./Footer.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Footer = ({ isChecked }) => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "50af093b-fa77-46af-9381-73f3ab6298f6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const currentYear = new Date().getFullYear();
  return (
    <div className={`footer ${isChecked ? "dark-mode" : "light-mode"}`}>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am a full-stack developer from Lagos State Nigerian with 4years
            working with companies like Yoris Africa and Techwise Impact
            Solutions.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <AccountCircleIcon className="icon" />
            <input
              onSubmit={onSubmit}
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; {currentYear} Poko Hamilton. All copyright reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
