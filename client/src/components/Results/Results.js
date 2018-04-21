import React from 'react';
import PropTypes from 'prop-types';
import './Results.css';

const Results = props => (
  <div className="result-item">
    <a href={props.href} target="_blank">{props.title}</a>
    <div className="save-btn">Save</div>
  </div>
);

Results.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Results;
