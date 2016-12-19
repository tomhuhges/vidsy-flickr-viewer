import React from 'react';
import { render } from 'react-dom';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { API_KEY, getRequestUrl } from './libs/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch() {
    const searchTerm = this.searchBar.search.value;
    const url = getRequestUrl(searchTerm, API_KEY);
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({ images: data.photos.photo });
      })
      .catch((error) => {
        throw error;
      });
  }
  render() {
    return (
      <div className="container">
        <SearchBar
          ref={(c) => { this.searchBar = c; }}
          handleSearch={this.handleSearch}
        />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
