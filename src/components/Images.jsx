import React from 'react';

class Images extends React.Component {
  render() {
    return (
      <div className="images">
        {this.props.images.map(image =>
          <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt={image.title} />,
        )}
      </div>
    );
  }
}

Images.propTypes = {
  images: React.PropTypes.array.isRequired,
};

export default Images;
