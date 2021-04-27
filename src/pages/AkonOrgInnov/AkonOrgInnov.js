import React, { useState } from "react";
import "./AkonOrgInnov.css";
import PageHeader from "../../components/Page-Header/PageHeader";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import * as RiIcons from "react-icons/ri";
// import "./ContractSigning.css";
import AkonOrgInnovData from "./AkonOrgInnovData";
const AkonOrgInnov = () => {
  const [akonOrgInnov, setAkonOrgInnov] = useState(false);
  const [initialAkonInnov, setInitialAkonInnov] = useState();
  const makeInitialVideo = (indx) => {
    setInitialAkonInnov(indx);
  };
  const onClickHandler = () => {
    setAkonOrgInnov(!akonOrgInnov);
  };

  return (
    <div>
      {akonOrgInnov && (
        <VideoSlider
          initialVideo={initialAkonInnov}
          onClickHandler={onClickHandler}
          Data={AkonOrgInnovData}
        />
      )}
      <PageHeader Children="الفيديو" />
      <div className="thevideos-component">
        <div className="video-container">
          {AkonOrgInnovData.map((item, indx) => (
            <div key={indx} className="each-video-container">
              <div
                onClick={() => {
                  onClickHandler();
                  makeInitialVideo(indx);
                }}
                className="poster-container"
              >
                <img className="video-poster" src={item.poster} alt="" />
                <button className="play-video">
                  <RiIcons.RiArrowRightSFill color="white" size={45} />
                </button>
              </div>
              <p className="video-promo-name">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AkonOrgInnov;
