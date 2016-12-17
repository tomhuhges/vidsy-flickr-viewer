import React from 'react';
import { render } from 'react-dom';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { getRequestUrl } from './libs/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const searchTerm = this.searchBar.search.value;
    const url = getRequestUrl(searchTerm);
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
          handleClick={this.handleClick}
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
