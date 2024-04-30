import React, { useEffect, useState } from "react";
import "./Hero.css";
import PortfolioPicture from "../../assets/PortfolioPicture.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = ({ isChecked }) => {
  const [menu, setMenu] = useState("home");
  const textChangeArray = [
    "Front-End Developer",
    "Back-End Developer",
    "3D Graphic Designer",
    "Content Creator",
    "Script Writter",
    "UI/UX designer",
  ];

  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let letterIndex = 0;
    let textIndex = 0;

    const intervalId = setInterval(() => {
      const currentWord = textChangeArray[textIndex];
      setCurrentText(currentWord.substring(0, letterIndex + 1));

      if (letterIndex === currentWord.length - 1) {
        letterIndex = 0;
        textIndex = (textIndex + 1) % textChangeArray.length;
      } else {
        letterIndex++;
      }
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // NEXT ANIMANTION
  const [letter, setLetter] = useState("");
  const paragraphChange = [
    "HTML5 & CSS",
    "React",
    "Vue.js",
    "Aspn.Net",
    "Express.js",
    "Java",
  ];

  useEffect(() => {
    let paraLetter = 0;
    let letterIndex1 = 0;

    const intervalId1 = setInterval(() => {
      const currentLetter = paragraphChange[letterIndex1];
      setLetter(currentLetter.substring(0, paraLetter + 1));

      if (paraLetter === currentLetter.length - 1) {
        // Move to the next word
        paraLetter = 0;
        letterIndex1 = (letterIndex1 + 1) % paragraphChange.length;
      } else {
        paraLetter++;
      }
    }, 1000);

    return () => clearInterval(intervalId1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="home" className={`hero ${isChecked ? "dark-mode" : "light-mode"}`}>
      <img src={PortfolioPicture} alt="" />
      <h1>
        <span>I am Hamilton Poko, a {currentText}</span> based in Nigeria.
      </h1>
      <p>
        I am a full-stack developer from Lagos Nigeria, with 4years of working
        experience on different languages like Javascript, C#, Java and also
        frameworks like <span>{letter}</span>.
      </p>
      <div className="hero-actions">
        <AnchorLink
          className={`anchor-like ${isChecked ? "dark-mode" : "light-mode"}`}
          offset={50}
          href="#contact"
        >
          <div onClick={() => setMenu("contact")} className="hero-connection">
            Connect with me
          </div>
        </AnchorLink>
        {menu === "services" ? <></> : <></>}
        <button
          className="hero-resume"
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/file/d/1G88GVbf86WgnAem6hChGVHNvarlTSky5/view?usp=sharing")
          }
        >
          My Resume
        </button>
      </div>
    </div>
  );
};
export default Hero;
