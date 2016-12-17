import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <input type="text" className="search" />
        <button className="btn">Search</button>
      </div>
    );
  }
}

export default SearchBar;
