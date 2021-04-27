import React from "react";
import { Link } from "react-router-dom";
import ServicesData from "./OurServicesData";
import "./OurServices.css";
const OurServices = () => {
  return (
    <div className="our-services-page">
      <div className="our-services-container">
        {ServicesData.map((item, indx) => (
          <p>{item.text}</p>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
