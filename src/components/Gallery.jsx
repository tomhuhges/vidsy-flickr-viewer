import React from 'react';
import { getImageUrl } from '../libs/api';

const Gallery = ({ images }) => (
  <div className="images">
    {images.map(image =>
      <img key={image.id} src={getImageUrl(image)} alt={image.title} />,
    )}
  </div>
);

Gallery.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Gallery;
