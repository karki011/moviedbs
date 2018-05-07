import React from 'react';
import PropTypes from 'prop-types';

// functional Stateless Comp[onents
const Movie = ({ movie }) => (
  <div>
    <h3> {movie.title}</h3>
  </div>
);


Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Movie;
