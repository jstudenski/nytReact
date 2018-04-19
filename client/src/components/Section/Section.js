import React from 'react';
import './Section.css';


// const Section = React.createClass({
//   render: function() {
//     return (
//       <div className="wrapper">
//         before
//           {this.props.children}
//         after
//       </div>
//     );
//   }
// });

const Section = props => (

  <div className="card">
      <h1>{props.title}</h1>
      {props.children}
  </div>

// var CheckLink = React.createClass({
//   render: function() {
//     // This takes any props passed to CheckLink and copies them to <a>
//     return 
//   }
// });

  // <h1>{this.props.title}</h1>
  // {this.props.children}


  // <div className="card">

    /* <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div> */
    /* <span onClick={() => props.removeFriend(props.id)} className="remove">
      𝘅
    </span> */
  // </div>
);

export default Section;
//export default Wrapper;