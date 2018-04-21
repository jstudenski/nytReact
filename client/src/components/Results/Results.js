import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import './Results.css';

const Results = props => (
  <div className="result-item">
    <a href={props.href} target="_blank">{props.title}</a>
    <RaisedButton label="Save" />
  </div>
);

Results.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Results;
