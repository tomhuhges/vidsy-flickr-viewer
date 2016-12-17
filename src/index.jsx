import React from 'react';
import { render } from 'react-dom';
import SearchBar from './components/SearchBar';
import Images from './components/Images';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <Images />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('app'),
);
