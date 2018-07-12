import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';
import requestPlayerStats from './services/requestPlayerStats';

class App extends Component {

  componentDidMount() {
    requestPlayerStats()
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to Reacssst</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
