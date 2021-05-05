import React from "react";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import "./IconsForContact.css";
import { Link } from "react-router-dom";
const IconsForContact = () => {
  return (
    <div className="intro-icons">
      <Link to="#">
        <img src={facebook} alt="" />
      </Link>
      <Link to="#">
        <img src={instagram} alt="" />
      </Link>
      <Link to="#">
        <img src={twitter} alt="" />
      </Link>
      <Link to="#">
        <img src={youtube} alt="" />
      </Link>
      <Link to="#">
        <img src={whatsapp} alt="" />
      </Link>
    </div>
  );
};

export default IconsForContact;
