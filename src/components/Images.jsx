import React from 'react';

const Images = ({ images }) =>
  (
    <div className="images">
      {images.map(image =>
        <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={image.title} />,
      )}
    </div>
  );

Images.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Images;
