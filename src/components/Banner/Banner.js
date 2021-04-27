import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import YouTube from "react-youtube";
import ReactPlayer from "react-player/lazy";
// import { NextArrow, PrevArrow } from "../VideoSlider/VideoSlider";
import "./Banner.css";
import videoData from "./VideoData";
import Slider from "react-slick";
const _onReady = (event) => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

const Banner = () => {
  const [playing, setPlaying] = useState(false);

  console.log(playing);
  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="arrow next"
        onClick={() => {
          onClick();
          setPlaying(false);
        }}
      >
        <RiIcons.RiArrowRightSFill size={70} className="right-direction" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="arrow prev"
        onClick={() => {
          onClick();
          setPlaying(false);
        }}
      >
        <RiIcons.RiArrowLeftSFill size={70} className="left-direction" />
      </div>
    );
  };
  // const nextVideo = () => {
  //   setIndex((prevIndex) => prevIndex + 1);
  //   setVideo({ ...video, currentVideo: videoData[index] });
  //   console.log(index);
  // };
  // console.log(video.currentVideo);
  // const prevVideo = () => {
  //   setIndex((prevIndex) => prevIndex - 2);
  //   setVideo({ ...video, currentVideo: videoData[index] });
  //   console.log(index);
  // };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          initialSlide: 1,
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
  const opts = {
    height: "500px",
    width: "100%",
    margin: "0 auto",
    playerVars: {
      https: "developers.google.com / youtube / player_parameters",
      autoplay: 0,
      playsinline: 0,
      controls: 0,
    },
  };
  return (
    <div className="banner-component">
      <Slider className="video-slider" {...settings}>
        {videoData.map((item, indx) => (
          // <YouTube videoId={item.id} />
          // <VideoPlayer slider key={indx} indx={indx} item={item.url} />
          // <ReactPlayer playing={playing} url={item.url} />
          // <video width="320" height="240" controls>
          //   <source src={item.url} type="video/mp4" />
          //   {/* <source src="movie.ogg" type="video/ogg" /> */}

          // </video>
          // <iframe width="420" height="315" src={item.url}></iframe>
          <iframe
            key={indx}
            width="727"
            height="409"
            src={item.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;