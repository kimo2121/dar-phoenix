import React from "react";
import Data from "./PublishData";
import "./PublishWithUs.css";

const PublishWithUs = () => {
  return (
    <div>
      <ul className="publish-with-us">
        {Data.map((item, indx) => (
          <div key={indx} className="each-service">
            <img src={item.img} alt="" />
            <li>{item.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default PublishWithUs;
