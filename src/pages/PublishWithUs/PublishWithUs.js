import React from "react";
import Data from "./PublishData";
import "./PublishWithUs.css";

const PublishWithUs = () => {
  return (
    <div>
      <ul className="publish-with-us">
        {Data.map((item, indx) => (
          <li key={indx} className="numeric-li">
            <div key={indx} className="each-service">
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PublishWithUs;
