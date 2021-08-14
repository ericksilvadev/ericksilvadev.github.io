import React from 'react';
import PropTypes from 'prop-types';

export default function Project(
  { project: { name, description, color, backgroundColor, img } },
) {
  return (
    <article className="project">
      <div className="img-container">
        <img src={ img } alt={ `${name} thumbnail` } />
        <div className="under-bar" style={ { backgroundColor } } />
      </div>
      <div style={ { color, backgroundColor } } className="project-info">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    img: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
};
