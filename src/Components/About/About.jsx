import React from "react";
import "./About.css";
import Cloud from "../../assets/Cloud.jpg";
import { useState, useEffect } from "react";

const About = ({ isChecked }) => {
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

  const [letter, setLetter] = useState("");
  const paragraphChange = [
    "HTML5 & CSS",
    "React",
    "React-Native",
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
    <div
      id="about"
      className={`about ${isChecked ? "dark-mode" : "light-mode"}`}
    >
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Cloud} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced <span>{letter}</span> with over 4 years of
              professional expertise in the field, Throughout my career, I have
              had the privilage of collaborating with prestigious organisations,
              contributing to their success and growth this is one of my 3D
              designs.
            </p>
            <p>
              My passion for <span>{currentText}</span> is not only reflected in
              my extensive experience but also in the enthusiasm and dedication
              i bring to each project.
            </p>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML5 & CSS</p>
                <hr style={{ width: "600px" }} />
              </div>
              <div className="about-skill">
                <p>React JS</p>
                <hr style={{ width: "550px" }} />
              </div>

              <div className="about-skill">
                <p>Express JS</p>
                <hr style={{ width: "500px" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "600px" }} />
              </div>
              <div className="about-skill">
                <p>Asp.NET</p>
                <hr style={{ width: "550px" }} />
              </div>
              <div className="about-skill">
                <p>Java</p>
                <hr style={{ width: "400px" }} />
              </div>
              <div className="about-skill">
                <p>3D Graphic Designs</p>
                <hr style={{ width: "500px" }} />
              </div>
              <div className="about-skill">
                <p>Content Creator</p>
                <hr style={{ width: "450px" }} />
              </div>
            </div>
          </div>
          <div className="about-achievements">
            <div className="about-achievement">
              <h1>4+</h1>
              <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>90+</h1>
              <p>PROJECT COMPLETE</p>
            </div>
            <hr />
            <div className="about-achievement">
              <h1>10+</h1>
              <p>HAPPY CLIENTS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
