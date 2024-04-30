import React from "react";
import "./Mywork.css";
import Works_image from "../../assets/myworks";

const Mywork = ({ isChecked }) => {
  return (
    <div
      id="mywork"
      className={`mywork ${isChecked ? "dark-mode" : "light-mode"}`}
    >
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-comtainer">
        {Works_image.map((work, index) => {
          return <img key={index} src={work.w_img} alt="" />;
        })}
      </div>
      <div className="mywork-shwmore">
        <p>Show More...</p>
      </div>
    </div>
  );
};

export default Mywork;
