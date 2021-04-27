import React from "react";
import Slider from "react-slick";
import * as RiIcons from "react-icons/ri";
import "./VideoSlider.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import * as AiIcons from "react-icons/ai";

const VideoSlider = ({ onClickHandler, initialVideo, Data }) => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RiIcons.RiArrowRightSFill size={70} className="right-direction" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <RiIcons.RiArrowLeftSFill size={70} className="left-direction" />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: initialVideo,
    swipeToSlide: false,
    nextArrow: false,
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: initialVideo,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <nav className="video-slider-component">
      <AiIcons.AiOutlineClose
        onClick={onClickHandler}
        className="video-slider-x-icon"
        size="35"
      />
      <Slider className="video-slider" {...settings}>
        {Data.map((item, indx) => (
          <VideoPlayer key={indx} slider item={item} />
        ))}
      </Slider>
    </nav>
  );
};
export default VideoSlider;
