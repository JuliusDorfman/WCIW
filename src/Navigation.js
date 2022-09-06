import React,  { useState } from 'react';
import './Navigation.css';

export default class Navigation extends React.Component {
  render() {
    const [query, searchQuery] = useState(query || ' ');
    const filteredChannels = filterChannels(channels, searchQuery);
    return ( 
    <header id="navigation">
      <div id="site-intro">
        <h1 className="site-acronym">WCIW</h1>
        <h2 className="site-name">Where Can I Watch</h2>
      </div>
      <nav id="navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Trending</a></li>
        </ul>
      <div id="searchbar">
        <label className="visually-hidden-global">Search for Channels</label>
        <input type="text" placeholder='Search...'></input>
      </div>
      </nav>
    </header>
    )
  }
}

