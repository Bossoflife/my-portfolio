import React from "react";
import "./Contact.css";
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = ({ isChecked }) => {
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
    console.log(res);
    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };
  return (
    <div
      id="contact"
      className={`contact ${isChecked ? "dark-mode" : "light-mode"}`}
    >
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avalible to take on new projects in my career, so feel
            free to send me a message about anything that you want me to work
            on. You can contact me anytime during working hour click the link to
            know about me on my social handle LinkedIn and Github as well i am
            opened to be hired and employed from 8am - 5pm.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <MailIcon className="icon1" />
              <p>hamiltonpoko25@gmail.com</p>
            </div>
            <div className="contact-detail">
              <CallIcon className="icon2" />
              <p>08123934904</p>
            </div>
            <div className="contact-detail">
              <LocationOnIcon className="icon3" />
              <p>Festac Town, Lagos State, Nigeria.</p>
            </div>
            <div className="contact-detail">
              <LinkedInIcon
                className="linkedin-icon"
                onClick={() =>
                  (window.location.href =
                    "https:www.linkedin.com/in/hamilton-poko-1a9783216")
                }
              />
              <p
                onClick={() =>
                  (window.location.href =
                    "https:www.linkedin.com/in/hamilton-poko-1a9783216")
                }
              >
                LinkedIn
              </p>
            </div>
            <div className="contact-detail">
              <GitHubIcon
                className="github-icon"
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Bossoflife?tab=repositories")
                }
              />
              <p
                onClick={() =>
                  (window.location.href =
                    "https://github.com/Bossoflife?tab=repositories")
                }
              >
                Github
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input name="name" type="text" placeholder="Enter your name" />
          <label htmlFor="">Your Email</label>
          <input name="email" type="email" placeholder="Enter your email" />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            type="text"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
