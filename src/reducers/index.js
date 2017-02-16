import { combineReducers } from 'redux'; // helper function that combines images and videos
//reducers into a single reducer function to pass to creatorStore function
import images from './imageReducer';
import videos from './videoReducer';
import $ from 'jquery'

//Combines all reducers to a single reducer function

const rootReducer = combineReducers({
  images,
  videos
});

export default rootReducer;
