import React from 'react';
import logo from '../assets/img/vidsy-logo.png';

/**
 * Header Component
 * @returns {ReactElement} markup
 */
const Header = () => (
  <div className="header">
    <img src={logo} alt="Vidsy logo" className="header-logo" />
    <h1 className="header-title">Flickr Viewer</h1>
  </div>
);

export default Header;
