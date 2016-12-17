import React from 'react';
import { getImageUrl } from '../libs/api';

const Images = ({ images }) => (
  <div className="images">
    {images.map(image =>
      <img key={image.id} src={getImageUrl(image)} alt={image.title} />,
    )}
  </div>
);

Images.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Images;
