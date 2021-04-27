// import React, { useState } from "react";
// import * as IoIcons from "react-icons/io";
// import YouTube from "react-youtube";
// import ReactPlayer from "react-player/lazy";
// import "./Banner.css";
// import videoData from "./VideoData";
// import { nextVideo, prevVideo } from "../../redux/banner/banner.actions";
// import { useDispatch, useSelector } from "react-redux";
// const _onReady = (event) => {
//   event.target.pauseVideo();
// };

// const Banner2 = () => {
//   const videos = useSelector((state) => state.banner.currentVideo);
//   const next = useDispatch();
//   const prev = useDispatch();

//   const [index, setIndex] = useState(1);
//   const [video, setVideo] = useState({
//     currentVideo: videoData[0],
//     videos: videoData,
//   });
//   // const nextVideo = () => {
//   //   setIndex((prevIndex) => prevIndex + 1);
//   //   setVideo({ ...video, currentVideo: videoData[index] });
//   //   console.log(index);
//   // };
//   // console.log(video.currentVideo);
//   // const prevVideo = () => {
//   //   setIndex((prevIndex) => prevIndex - 2);
//   //   setVideo({ ...video, currentVideo: videoData[index] });
//   //   console.log(index);
//   // };

//   const opts = {
//     height: "500px",
//     width: "100%",
//     margin: "0 auto",
//     playerVars: {
//       https: "developers.google.com / youtube / player_parameters",
//       autoplay: 0,
//       playsinline: 0,
//       controls: 0,
//     },
//   };
//   return (
//     <div className="banner-component">
//       <button
//         className="arrow prev banner"
//         onClick={() => prev(prevVideo())}
//         // disabled={index === 1}
//       >
//         <IoIcons.IoIosArrowDropleft size={50} className="left-direction" />
//       </button>

//       <YouTube videoId={videos.id} opts={opts} onReady={_onReady} />
//       <button
//         className="arrow next banner"
//         onClick={() => next(nextVideo())}
//         disabled={index === 4}
//       >
//         <IoIcons.IoIosArrowDropright size={50} className="right-direction" />
//       </button>
//     </div>
//   );
// };

// export default Banner2;
