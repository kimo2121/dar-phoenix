import videoData from "../../pages/HomePage/VideoData";
import BannerActionTypes from "./banner.types";
const INITIAL_STATE = {
  videoData: videoData,
  currentVideo: videoData[0],
  index: 1,
};

const bannerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BannerActionTypes.NEXT_VIDEO:
      return {
        ...state,
        index: state.index + 1,
        currentVideo: videoData[state.index],
      };

    case BannerActionTypes.PREV_VIDEO:
      return {
        ...state,
        index: state.index - 1,
        currentVideo: videoData[state.index],
      };
    default:
      return state;
  }
};

export default bannerReducer;
