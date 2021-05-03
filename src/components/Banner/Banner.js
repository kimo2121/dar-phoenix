import React, { useState } from "react";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import "./Banner.css";
import Slider from "react-slick";

const Banner = ({ Data }) => {
  const [playing, setPlaying] = useState(false);

  console.log(playing);
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        {/* <RiIcons.RiArrowRightSFill size={95} className="right-direction" /> */}
        <IoIcons.IoIosArrowDropright size={70} className="right-direction" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIcons.IoIosArrowDropleft size={70} className="right-direction" />

        {/* <RiIcons.RiArrowLeftSFill size={95} className="left-direction" /> */}
      </div>
    );
  };
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

  return (
    <div className="banner-component">
      <Slider className="video-slider" {...settings}>
        {Data.map((item, indx) => (
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
