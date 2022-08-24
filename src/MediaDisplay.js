import React from 'react';
import dogege from './assets/images/placeholder-dogege.png'
import './MediaDisplay.css';

const arrayOfData = [
  {title: 'titleOne', runtime: '1hr 21mins',
  poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
{title: 'titleOne', runtime: '1hr 21mins',
poster: dogege
},
]

export default class MediaDisplay extends React.Component {
  render() {
    return(
      <section id="MediaDisplay">
        <div id="MediaCardContainer">
          {arrayOfData.map((movie, index) => {
            return (
            <div className="MediaCard" key={index}>
              {movie.title}
              <img src={dogege} alt="dogege shovel" />
            </div>
            )
          }
          )
          }
        </div>
      </section>
    )
  }
}
