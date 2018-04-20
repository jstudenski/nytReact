import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

const Results = props => (
  <div>
    <h3>{props.title}</h3>
    {props.href}
    <a href={props.href} target="_blank">{props.title}</a>
  </div>
);

Results.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Results;
