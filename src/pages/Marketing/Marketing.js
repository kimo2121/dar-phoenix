import React from "react";
import { Link } from "react-router-dom";
import MarketingData from "./MarketingData.js";
import "./Marketing.css";
const Marketing = () => {
  return (
    <div class="marketing-container">
      {MarketingData.map((item, indx) => (
        <div key={indx} className={item.name}>
          <Link to={item.to}>{item.text}</Link>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ))}
    </div>
  );
};

export default Marketing;
