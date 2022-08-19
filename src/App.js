import logo from './logo.svg';
import Navigation from './Navigation';
import MediaCard from './MediaCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
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
      </header>
      {/* replace this dive with container */}
      <div>
        <MediaCard />
      </div>
    </div>
  );
}

export default App;
