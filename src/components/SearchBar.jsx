import React from 'react';

/**
 * SearchBar component
 */
class SearchBar extends React.Component {
  /**
  * Render the component
  * @returns {ReactElement} markup
  */
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

/**
 * propTypes
 * @property {func} handleSearch function
 */
SearchBar.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
};

export default SearchBar;
