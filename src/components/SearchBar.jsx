import React from 'react';
import { API_KEY } from '../apikeys';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const searchTerm = this.search.value;
    const url = `https://api.flickr.com/services/rest/?api_key=${API_KEY}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=25&page=1&text=${searchTerm}`;
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data.photos.photo);
      })
      .catch((error) => {
        throw error;
      });
  }
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
          onClick={this.handleClick}
        >Go</button>
      </div>
    );
  }
}

export default SearchBar;
