import React, { useState } from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import * as RiIcons from "react-icons/ri";
import "./ContractSigning.css";
import ContractVideos from "./ContractVideos";

const ContractSigning = () => {
  const [contractVideos, setContractVideos] = useState(false);
  const [initialVideo, setInitialVideo] = useState();
  const makeInitialVideo = (indx) => {
    setInitialVideo(indx);
  };
  const onClickHandler = () => {
    setContractVideos(!contractVideos);
  };

  return (
    <div>
      {contractVideos && (
        <VideoSlider
          initialVideo={initialVideo}
          onClickHandler={onClickHandler}
          Data={ContractVideos}
        />
      )}
      <PageHeader Children="الفيديو" />
      <div className="thevideos-component">
        <div className="video-container">
          {ContractVideos.map((item, indx) => (
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

export default ContractSigning;
