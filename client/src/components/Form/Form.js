import React, { Component } from "react";
import "./Form.css";
import API from '../../utils/API';


class Form extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    numRecords: "",
    startYear:"",
    endYear:"",
    result: [],
  };

  searchNYT = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.response.docs }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

   // numResults = $("#num-records-select").val();

  //     // If the user provides a startYear -- the startYear will be included in the queryURL
  // if (parseInt(startYear)) {
  //   searchURL = searchURL + "&begin_date=" + startYear + "0101";
  // }

  // // If the user provides a startYear -- the endYear will be included in the queryURL
  // if (parseInt(endYear)) {
  //   searchURL = searchURL + "&end_date=" + endYear + "0101";
  // }




    // Alert the user their first and last name, clear `this.state.topic` and `this.state.numRecords`, clearing the inputs
    //alert(`Hello ${this.state.topic} ${this.state.numRecords}`);
    this.setState({
      topic: "",
      numRecords: "",
      startYear: "",
      endYear: "",
    });

    console.log(this.state);
    this.searchNYT(this.state.topic);
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello Topic:{this.state.topic} Num:{this.state.numRecords} Start:{this.state.startYear} End:{this.state.endYear}
        </p>
        <form className="form">
          <input
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Topic"
          />
          <input
            value={this.state.numRecords}
            name="numRecords"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Number of Records to Retrieve"
          />
          <input
            value={this.state.startYear}
            name="startYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Start Year"
          />
          <input
            value={this.state.endYear}
            name="endYear"
            onChange={this.handleInputChange}
            type="text"
            placeholder="End Year"
          />

          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        {this.state.result.map(result => {
            return (
              <h2>{result.headline.main}</h2>

              // <Results
              //   key={result.web_url}
              //   title={result.headline.main}
              //   href={result.web_url}
              // />
            );
          })}
          
      </div>
    );
  }
}

export default Form;
