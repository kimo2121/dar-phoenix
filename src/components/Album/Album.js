import React from "react";
import Slider from "react-slick";
import * as RiIcons from "react-icons/ri";
import "./Album.css";
import * as AiIcons from "react-icons/ai";

const Album = ({
  onImageHandler,
  Data,
  onMockupHandler,
  imageCovers,
  mockupCovers,
}) => {
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
    // customPaging: function (i) {
    //   return (
    //     <a className="image-in-thumb">
    //       <img src={Data[i]} />
    //     </a>
    //   );
    // },
    dots: true,
    // dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <nav className="image-slider-component">
      <AiIcons.AiOutlineClose
        onClick={() => {
          imageCovers ? onImageHandler() : mockupCovers && onMockupHandler();
        }}
        className="video-slider-x-icon"
        size="35"
      />
      <Slider className="image-slider-container" {...settings}>
        {Data.map((item, indx) => (
          <div className="each-image">
            <img src={item} alt="" />
          </div>
        ))}
      </Slider>
    </nav>
  );
};
export default Album;
