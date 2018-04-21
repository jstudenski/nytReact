import React, { Component } from "react";
import "./Form.css";
import API from '../../utils/API';

class Form extends Component {
  // Setting the component's initial state
  state = {
    topic: "",
    startYear:"",
    endYear:"",
    searchURL:"",
    result: [],
  };

  someFn = () => {
    // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
    this.props.callbackFromParent('test');
  };


  searchNYT = query => {
    API.search(query)
    //  .then(res => this.setState({ result: res.data.response.docs }))
      .then(res => this.props.callbackFromParent(res.data.response.docs ))
      .catch(err => console.log(err));

      
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    }, () => {
      this.setState(
        {searchURL: 
          (this.state.topic)+
          (this.state.startYear ? `&begin_date=${this.state.startYear}0101` : "")+
          (this.state.endYear ? `&end_date=${this.state.endYear}0101` : "")
        }
      )
    });
    
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // a few validations
    if (!this.state.topic) {
      alert("Please add a topic!");
    } else if (isNaN(this.state.startYear) || isNaN(this.state.endYear) ) {
      alert("Years need to be numbers");
    } else {
      // query API
      this.searchNYT(this.state.searchURL);
      this.setState({
        topic: "",
        startYear: "",
        endYear: "",
      });
    }
  };

  render() {
    return (
      <div>
        {/* display live
        <p>
          Hello Topic:{this.state.topic} Num:{this.state.searchURL} Start:{this.state.startYear} End:{this.state.endYear}
        </p> */}
        <form className="form">
          <input
            value={this.state.topic}
            name="topic"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Topic"
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
              <h2 key={result.web_url}>{result.headline.main}</h2>
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
