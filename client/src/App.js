import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">New York Times Search</h1>
        </header>
        <Form />
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
