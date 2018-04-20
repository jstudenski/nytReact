import React, { Component } from 'react';
import './App.css';
import Section from './components/Section';
import Form from './components/Form';
import Results from './components/Results';
import API from './utils/API';

class App extends Component {
  state = {
    result: [],
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchNYT("matrix");
  }

  searchNYT = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">New York Times Search</h1>
        </header>

        <Section title="Search"><Form /></Section>,
        <Section title="Results">
          {this.state.result.map(result => {
            return (
              <Results
                key={result.web_url}
                title={result.headline.main}
                href={result.web_url}
              />
            );
          })}
        </Section>,
        <Section title="Saved Articles"></Section>,
      </div>
    );
  }
}

export default App;
