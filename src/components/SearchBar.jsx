import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <input
          type="text"
          className="search"
          ref={(c) => { this.search = c; }}
          placeholder="Search Flickr"
        />
        <button
          className="btn"
          onClick={this.props.handleClick}
        >Go</button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default SearchBar;
