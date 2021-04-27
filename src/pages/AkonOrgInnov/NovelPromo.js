import React, { useState } from "react";
import PageHeader from "../../components/Page-Header/PageHeader";
import VideoSlider from "../../components/VideoSlider/VideoSlider";
import * as RiIcons from "react-icons/ri";
// import "./ContractSigning.css";
import NovelPromoData from "./NovelPromoData";

const NovelPromo = () => {
  const [promoVideos, setPromoVideos] = useState(false);
  const [initialPromo, setInitialPromo] = useState();
  const makeInitialVideo = (indx) => {
    setInitialPromo(indx);
  };
  const onClickHandler = () => {
    setPromoVideos(!promoVideos);
  };

  return (
    <div>
      {promoVideos && (
        <VideoSlider
          initialVideo={initialPromo}
          onClickHandler={onClickHandler}
          Data={NovelPromoData}
        />
      )}
      <PageHeader Children="الفيديو" />
      <div className="thevideos-component">
        <div className="video-container">
          {NovelPromoData.map((item, indx) => (
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

export default NovelPromo;
