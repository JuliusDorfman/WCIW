import React from 'react';
import dogege from './assets/images/placeholder-dogege.png'
import './MediaCard.css';

export default class MediaCard extends React.Component {
  render() {
    return (
  <div className="media-card-container">
    TEMPORARY TEXT
    {/* find out what to ue for REL tag */}
    <a className="media-card-link" href="/#" target="_blank" rel="temporary">
    <div className="media-card-cover">
      <picture>
        <source srcSet="./src/assets/images/placeholder-dogege.png" type="picture">
        </source>
        <source srcSet="./src/assets/images/placeholder-dogege.png" type="picture">
        </source>
        {/* REPLACE ALT TEXT WITH DESCRIPTIVE TEXT */}
        <img src={dogege} alt="movieposter"/>
      </picture>
    </div>
    </a>
  </div>
    )}
}