import React, { PropTypes } from 'react';
import LoadPage from '../components/LoaderPage';
import { FacebookButton, FacebookCount } from "react-social";
// First, we extract videos, onHandleSelectVideo, and selectedVideo
// from props using destructuring assignment and then render.



let appId ="1285071564899970",
    url,
    media,
    liked = true,
    buttonClass = liked ? 'active' : '';


// var toggleLiked = () => {
//   event.preventDefault();
//     console.log(liked)
//     liked = !liked;
//     buttonClass = liked ? 'active' : '';
//     console.log(buttonClass)
//     return
//         delta = () => {
//             this.setState({
//                 buttonClass
//             });
//         }
//
//
// }



const VideosPage = ({  videos, onHandleSelectVideo, selectedVideo }) => (

  <div className="col-md-6">
    <h2> Videos </h2>
        <div className="select-video">
        <FacebookButton url={selectedVideo.mediaUrl} appId={appId}>
        <FacebookCount url={selectedVideo.mediaUrl} />
             {" Share video" }
         </FacebookButton>
          <div id={selectedVideo.id}>
            <h6 className="title">

              {selectedVideo.description}
            </h6>
            { selectedVideo.loaded ?
            <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
            : <LoadPage/>}
          </div>
        </div>

    <div className="video-thumbnail">
      {videos.map((video, i) => (
        <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.description} />
        </div>
      ))}
    </div>
  </div>
);

// Define PropTypes
VideosPage.propTypes = {
  videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.object.isRequired,
  onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideosPage;
