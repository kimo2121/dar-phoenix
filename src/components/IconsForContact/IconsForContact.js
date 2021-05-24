import React from "react";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsapp.png";
import "./IconsForContact.css";
const IconsForContact = () => {
  return (
    <div className="intro-icons">
      <a target="_blank" href="https://www.facebook.com/Darphoniex/">
        <img src={facebook} alt="" />
      </a>
      <a target="_blank" href="https://www.instagram.com/dar_phoniex/">
        <img src={instagram} alt="" />
      </a>
      <a
        target="_blank"
        href="https://www.youtube.com/channel/UCoATDznn5wBJSFKuCaMpsLQ"
      >
        <img src={youtube} alt="" />
      </a>
      <a target="_blank" href="https://wa.me/201060587720">
        <img src={whatsapp} alt="" />
      </a>
    </div>
  );
};

export default IconsForContact;
