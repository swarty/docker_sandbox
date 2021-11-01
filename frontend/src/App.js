import logo from './logo.svg';
import './App.css';

function App() {
  fetch('127.0.0.1/api/posts')
  .then(response => {
    return response.json();
  })
  .then(response => {
    console.log(response);
  })
  .catch(console.error);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Some new changes, and new new
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
    </div>
  );
}

export default App;
