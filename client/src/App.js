import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">New York Times Search</h1>
        </header>

        <Section title="Search"><Form /></Section>,
        <Section title="Results"><Results /></Section>,
        <Section title="Saved Articles"></Section>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
