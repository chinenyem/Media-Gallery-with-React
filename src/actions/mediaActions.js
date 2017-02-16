import * as types from '../constants/actionTypes';

//Returns an action type, SELECTED_IMAGE and the image SELECTED_IMAGE

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

//Returns an action type, SELECTED_VIDEO and the video selected
export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

//Returns an action type SEARCH_MEDIA_REQUEST and the search criteria
export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});


//Returns an action type LIKE_MEDIA 
export const likeMediaAction = (liked) => ({
  type: types.LIKE_MEDIA,
  liked
});
