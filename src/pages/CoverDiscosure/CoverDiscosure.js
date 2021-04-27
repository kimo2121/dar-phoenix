import React, { useState } from "react";
import Album from "../../components/Album/Album";
import PageHeader from "../../components/Page-Header/PageHeader";
import "./CoverDiscosure.css";
import * as RiIcons from "react-icons/ri";
import { imageCoversData, mockupCoversData } from "./imageCoversData";
const CoverDiscosure = () => {
  const [imageCovers, setImageCovers] = useState(false);
  const [mockupCovers, setMockupCovers] = useState(false);

  const onImageHandler = () => {
    setImageCovers(!imageCovers);
  };
  const onMockupHandler = () => {
    setMockupCovers(!mockupCovers);
  };
  return (
    <div>
      {imageCovers && (
        <Album
          imageCovers
          onImageHandler={onImageHandler}
          Data={imageCoversData}
        />
      )}
      {mockupCovers && (
        <Album
          mockupCovers
          onMockupHandler={onMockupHandler}
          Data={mockupCoversData}
        />
      )}
      <PageHeader Children="البومات" />
      <div className="thevideos-component">
        <div className="video-container">
          <div className="each-video-container">
            <div
              onClick={() => {
                onImageHandler();
              }}
              className="poster-container"
            >
              <img className="mockup-poster" src={imageCoversData[0]} alt="" />
              <img className="mockup-poster" src={imageCoversData[1]} alt="" />
              <img className="mockup-poster" src={imageCoversData[2]} alt="" />
              <img className="mockup-poster" src={imageCoversData[3]} alt="" />
            </div>
            <p className="video-promo-name">Album</p>
          </div>
          <div className="each-video-container">
            <div
              onClick={() => {
                onMockupHandler();
              }}
              className="poster-container"
            >
              <img className="mockup-poster" src={mockupCoversData[0]} alt="" />
              <img className="mockup-poster" src={mockupCoversData[1]} alt="" />
              <img className="mockup-poster" src={mockupCoversData[2]} alt="" />
              <img className="mockup-poster" src={mockupCoversData[3]} alt="" />
            </div>
            <p className="video-promo-name">Mochups</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverDiscosure;
