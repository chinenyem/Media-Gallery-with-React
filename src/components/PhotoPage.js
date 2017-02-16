import React, { PropTypes } from 'react';
import { FacebookButton, FacebookCount } from "react-social";

// First, we extract images, onHandleSelectImage, and selectedImage from
// props using ES6 destructuring assignment and then render.
let appId ="1285071564899970", url;
const PhotosPage = ({  images, onHandleSelectImage, selectedImage }) => (
  <div className="col-md-6">
    <h2> Images </h2>
        <div className="selected-image">
        <FacebookButton url={selectedImage.mediaUrl} appId={appId}>
        <FacebookCount url={selectedImage.mediaUrl} />
             {" Share Photo"}
         </FacebookButton>
          <div id={selectedImage.id}>
            <h6>{selectedImage.title}</h6>
              <img src={selectedImage.mediaUrl} alt={selectedImage.title} />
          </div>
        </div>

    <div className="image-thumbnail">
      {images.map((image, i) => (
        <div key={i} onClick={onHandleSelectImage.bind(this, image)}>
          <img src={image.mediaUrl} alt={image.title} />
        </div>
      ))}
    </div>
  </div>
);

// Define PropTypes
PhotosPage.propTypes = {
  images: PropTypes.array.isRequired,
  selectedImage: PropTypes.object,
  onHandleSelectImage: PropTypes.func.isRequired
};

export default PhotosPage;
