import initialState from './initialState';
import * as types from '../constants/actionTypes';

//Handles video related actions
// The idea is to return an updated copy of the state depending on the action type.

export default function (state = initialState.videos, action) {
  switch (action.type){
    case types.SHUTTER_VIDEOS_SUCCESS:
      return [...state, action.videos];
    case types.SELECTED_VIDEO:
      return {...state, selectedVideo: action.video }; //spread operators to make and update the new copy of the current state tree.
    default:
      return state;
  }
}
