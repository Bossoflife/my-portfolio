import React from "react";
import "./Services.css";
import Services_Data from "../../assets/services.js";

const Services = ({ isChecked }) => {
  return (
    <div
      id="services"
      className={`services ${isChecked ? "dark-mode" : "light-mode"}`}
    >
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div
              key={index}
              className={`services-format ${
                isChecked ? "dark-mode" : "light-mode"
              }`}
            >
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-read-more">
                <p>Read More...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
