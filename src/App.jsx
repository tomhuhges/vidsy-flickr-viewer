import React from 'react';
import DocumentHead from 'react-helmet';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Gallery from './components/Gallery';
import { API_KEY, getRequestUrl } from './libs/api';

/**
 * App component
 * This is the top level component
 */
class App extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.state = {
      images: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  /**
  * Make API call to Flickr
  * @returns {Promise<Response>}
  */
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
  /**
  * Render the component
  * @returns {ReactElement} markup
  */
  render() {
    return (
      <div className="container">
        <DocumentHead
          link={[
            {
              rel: 'stylesheet',
              href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900',
            },
          ]}
        />
        <Header />
        <SearchBar
          ref={(c) => { this.searchBar = c; }}
          handleSearch={this.handleSearch}
        />
        <Gallery images={this.state.images} />
      </div>
    );
  }
}

export default App;
