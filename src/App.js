import logo from './logo.svg';
import Navigation from './Navigation';
import MediaCard from './MediaCard';
import MediaDisplay from './MediaDisplay';
import Footer from './Footer.js';
import './App.css';

function App() {
  return (
    <div id="App">
      <Navigation/>
      <MediaDisplay />
      <Footer />
          {/* <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header> */}
    {/* replace this div with container */}
    </div>
  );
}

export default App;
