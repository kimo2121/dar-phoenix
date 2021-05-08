import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Intro from "../../components/Intro/Intro";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";
import VideoData from "./VideoData";
import map from "../../assets/map.png";
const HomePage = () => {
  return (
    <div className="home-page">
      <Banner Data={VideoData} />
      <div className="contact-info">
        <p>
          Call us
          <br />
          <a target="_blank" href="https://wa.me/966596506866">
            966596506866+
          </a>
          <br />
          <a target="_blank" href="https://wa.me/201279824244">
            201279824244+
          </a>
        </p>
        <p>
          Email
          <br />
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=DarPhoniex@gmail.com"
          >
            DarPhoniex@gmail.com
          </a>
        </p>
      </div>
      <div className="map">
        <img src={map} alt="" />
      </div>
      {/* <Map /> */}
      <div className="form-intro">
        <Intro />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
