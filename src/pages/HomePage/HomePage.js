import React from "react";
import "./HomePage.css";
import Contact from "../Contact/Contact";
import Banner2 from "../../components/Banner/banner2";
import Banner from "../../components/Banner/Banner";
import { Link } from "react-router-dom";
import Intro from "../../components/Intro/Intro";
import ContactForm from "../../components/ContactForm/ContactForm";
import SliderContact from "../../components/SliderContact/SliderContact";
import Map from "../../components/Map/Map";
import LocationOnMap from "../../components/Map2/Map2";

const HomePage = () => {
  return (
    <div className="home-page">
      <Banner />
      {/* <Banner2 /> */}
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
      <div className="map"></div>
      <div className="form-intro">
        <Intro />
        <ContactForm />
      </div>
      {/* <About firstHomePage />
      <Retails secondHomePage />
      <Ourwriters thirdHomePage />
      <TheVideos fourthHomePage />
      <PeoplePreview fifthHomePage />
      <BookStore sixthHomePage />
      <Contact seventhHomePage /> */}
      {/* <Map /> */}
      <LocationOnMap />
    </div>
  );
};

export default HomePage;
