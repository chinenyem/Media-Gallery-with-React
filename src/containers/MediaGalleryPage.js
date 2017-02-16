import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../Api/api';
import {connect} from 'react-redux';
import {selectImageAction, searchMediaAction, selectVideoAction, likeMediaAction } from '../actions/mediaActions';
import LoadPage from '../components/LoaderPage';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';


// MediaGalleryPage Component


  var liked = true,
      buttonClass = liked ? 'active' : '';

class MediaGalleryPage extends Component {

  constructor(){
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
    //this.toggleLiked = this.toggleLiked.bind(this);
    this.state = { liked:false };
  }




  // We want to get images and videos from the API right after our Component renders.
  componentDidMount(){
    this.props.dispatch(searchMediaAction('puppy'));

    setTimeout(function() {
        this.setState({loaded: true})
    }.bind(this), 3000);

    this.setState({
        liked:false
    })

    //flickrImages('show').then(images => console.log(images, 'Images'));
    //shutterStockVideos('show').then(videos => console.log(videos, 'Videos'));

  }

  //Dispatches *likeMedia* when like is clicked
  // handleLikeMedia(likedMedia){
  //   this.props.dispatch(likeMediaAction(likedMedia));
  // }


  //
  // toggleLiked(){
  //   event.preventDefault();
  //     console.log(liked)
  //     liked = !liked;
  //     buttonClass = liked ? 'active' : '';
  //     console.log(buttonClass)
  //     return buttonClass
  //
  //
  //
  // }



    // Dispatches *selectImageAction* when any image is clicked
   handleSelectImage(selectedImage) {
     this.props.dispatch(selectImageAction(selectedImage));
   }

   // Dispatches *selectvideoAction* when any video is clicked
   handleSelectVideo(selectedVideo) {
     this.props.dispatch(selectVideoAction(selectedVideo));
   }

   // Dispatches *searchMediaAction* with query param.
   // We ensure action is dispatched to the store only if query param is provided.
   handleSearch(event) {
     event.preventDefault();
     if (this.query !== null) {
       this.props.dispatch(searchMediaAction(this.query.value));
       this.query.value = '';
     }
   }

  //  toggleLiked(buttonClass) {
  //      //event.preventDefault();
  //      console.log("hello")
  //     //let buttonClass = this.state.liked ? 'active' : '';
  //     //this.props.dispatch(likeMediaAction(this.state({
  //       liked = !liked
  //       this.setState({
  //           liked
  //       })
  //     //})));
  //  }

   render() {
     const { images, selectedImage, videos, selectedVideo } = this.props;

     //this.buttonClass = this.state.liked ? 'active' : '';


     return (
       <div className="container-fluid">
         {images ? <div>
           <input
             type="text"
             ref={ref => (this.query = ref)}/>
           <input
             type="submit"
        className="btn btn-primary"
             value="Search Library"
             onClick={this.handleSearch}/>
      
         {this.state.loaded ?
               <div className="row">
                  <PhotoPage
                   images={images}
                   selectedImage={selectedImage}
                   onHandleSelectImage={this.handleSelectImage}/>
                 <VideoPage
                   videos={videos}
                   selectedVideo={selectedVideo}
                   onHandleSelectVideo={this.handleSelectVideo}/>
               </div>
          : <LoadPage/>}
         </div> : <LoadPage/>}
       </div>
     );
   }
 }



  // Define PropTypes
  MediaGalleryPage.propTypes = {
    images: React.PropTypes.array,
    selectedImage: React.PropTypes.object,
    videos: React.PropTypes.array,
    selectedVideo: React.PropTypes.object,
    dispatch: React.PropTypes.func.isRequired
  };

   // Subscribe component to redux store and merge the state into component's props
  const mapStateToProps = ({ images, videos }) => ({
    images: images[0],
    selectedImage: images.selectedImage,
    videos: videos[0],
    selectedVideo: videos.selectedVideo
  });



export default connect(
  mapStateToProps)(MediaGalleryPage);
