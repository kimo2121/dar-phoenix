import BannerActionTypes from "./banner.types";
export const nextVideo = (name) => ({
  type: BannerActionTypes.NEXT_VIDEO,
  // payload: name,
});
export const prevVideo = (name) => ({
  type: BannerActionTypes.PREV_VIDEO,
  // payload: name,
});
