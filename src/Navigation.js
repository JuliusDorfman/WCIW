import React from 'react';
import './Navigation.css';

export default class Navigation extends React.Component {
  render() {
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
        <input type="text" placeholder='Search...'></input>
      </div>
      </nav>
    </header>
    )
  }
}

