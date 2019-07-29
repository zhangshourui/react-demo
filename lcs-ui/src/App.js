import React from 'react';
import './styles/bootstrap4.min.css'
import './App.css';
import IncHeaderNav from "./inc/header-nav"
import Login from './inc/Login'

function App() {
  return (
    <div className="App">
      <IncHeaderNav />
      <div className="content-fluid">
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

        <Login />
      </div>
    </div>
  );
}

export default App;
