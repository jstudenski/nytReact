import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  render() {
    return (
      <h2>Results here...</h2>
    );
  }


  // // Setting the component's initial state
  // state = {
  //   topic: "",
  //   numRecords: "",
  //   startYear:"",
  //   endYear:"",
  // };

  // handleInputChange = event => {
  //   // Getting the value and name of the input which triggered the change
  //   const { name, value } = event.target;

  //   // Updating the input's state
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   // Alert the user their first and last name, clear `this.state.topic` and `this.state.numRecords`, clearing the inputs
  //   //alert(`Hello ${this.state.topic} ${this.state.numRecords}`);
  //   this.setState({
  //     topic: "",
  //     numRecords: "",
  //     startYear: "",
  //     endYear: "",
  //   });
  // };

  // render() {
  //   // Notice how each input has a `value`, `name`, and `onChange` prop
  //   return (
  //     <div>
  //       <p>
  //         Hello Topic:{this.state.topic} Num:{this.state.numRecords} Start:{this.state.startYear} End:{this.state.endYear}
  //       </p>
  //       <form className="form">
  //         <input
  //           value={this.state.topic}
  //           name="topic"
  //           onChange={this.handleInputChange}
  //           type="text"
  //           placeholder="Topic"
  //         />
  //         <input
  //           value={this.state.numRecords}
  //           name="numRecords"
  //           onChange={this.handleInputChange}
  //           type="text"
  //           placeholder="Number of Records to Retrieve"
  //         />
  //         <input
  //           value={this.state.startYear}
  //           name="startYear"
  //           onChange={this.handleInputChange}
  //           type="text"
  //           placeholder="Start Year"
  //         />
  //         <input
  //           value={this.state.endYear}
  //           name="endYear"
  //           onChange={this.handleInputChange}
  //           type="text"
  //           placeholder="End Year"
  //         />

  //         <button onClick={this.handleFormSubmit}>Submit</button>
  //       </form>
  //     </div>
  //   );
  // }
}

export default Results;
