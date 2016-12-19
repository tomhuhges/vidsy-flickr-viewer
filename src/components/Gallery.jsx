import React from 'react';
import { getImageUrl } from '../libs/api';

/**
 * Gallery Component
 * @param {array} images
 * @returns {ReactElement} markup
 */
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

/**
 * propTypes
 * @property {array} array of image objects
 */
Gallery.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Gallery;
