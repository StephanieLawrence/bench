import React, { Component } from 'react';
import './App.css';
import Questions from './questions'
import Name from './name'
import Map from './map'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "container">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Bench</h1>
        </header>
        <p className="App-intro">
          To get started, please answer the following questions:
        </p>
        <Name />
        <Questions/>
        <Map/>
      </div>
      </div>
    );
  }
}

export default App;
