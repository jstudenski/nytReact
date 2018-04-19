import React from 'react';
import './Section.css';

const Section = props => (

  <div className="card">
    <h1>{props.title}</h1>
    {props.children}
  </div>

);

export default Section;
