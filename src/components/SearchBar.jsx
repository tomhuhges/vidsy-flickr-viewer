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
          onKeyUp={this.props.handleSearch}
        />
        <button
          className="btn"
          onClick={this.props.handleSearch}
        >Go</button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
};

export default SearchBar;
