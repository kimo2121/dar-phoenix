import React from "react";
import { Link } from "react-router-dom";
import ServicesData from "./OurServicesData";
import "./OurServices.css";
const OurServices = () => {
  return (
    <div className="our-services-page">
      <div className="our-services-container">
        {ServicesData.map((item, indx) => (
          <li className="each-topic">
            <span>{item.title}</span>
            <p>{item.text}</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
