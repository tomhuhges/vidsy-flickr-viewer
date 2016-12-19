import React from 'react';
import { getImageUrl } from '../libs/api';

const Gallery = ({ images }) => (
  <div className="images">
    {images.map(image =>
      <div
        key={image.id}
        style={{ backgroundImage: `url(${getImageUrl(image)})` }}
        className="img"
      />,
    )}
  </div>
);

Gallery.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Gallery;
