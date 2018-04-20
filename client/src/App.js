import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Results from './components/Results';

class App extends Component {
  render() {
    this.state = {
      result: [],
      search: '',
    };

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">New York Times Search</h1>
        </header>

        <Section title="Search"><Form /></Section>,
        <Section title="Results">
          {this.state.result.map(result => (
            <Results
              key={result.web_url}
              title={result.headline.main}
              href={result.web_url}
            />
            ))}
        </Section>,
        <Section title="Saved Articles" />,
      </div>
    );
  }
}

export default App;
