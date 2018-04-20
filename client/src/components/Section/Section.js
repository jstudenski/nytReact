import React from 'react';
import PropTypes from 'prop-types';
import './Section.css';

const Section = props => (
  <div className="card">
    <h1>{props.title}</h1>
    {props.children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Section.defaultProps = {
  children: 'coming soon..',
};

export default Section;
