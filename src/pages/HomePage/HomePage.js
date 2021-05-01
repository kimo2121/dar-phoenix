import React from "react";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Intro from "../../components/Intro/Intro";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      <div className="contact-info">
        <p>
          Call us
          <br />
          <Link to="#">201060587720+</Link>
          <br />
          <Link to="#">201279824244+</Link>
        </p>
        <p>
          Email
          <br />
          <Link to="#">DarPhoniex@gmail.com</Link>
        </p>
      </div>
      <div className="form-intro">
        <Intro />
        <ContactForm />
      </div>
      <Map />
    </div>
  );
};

export default HomePage;
