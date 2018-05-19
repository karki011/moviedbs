import React, { Component } from 'react';
import styled from 'styled-components';
import Movie from './Movie';


class MoviesList extends Component {
  state = {
    movies: [],
  }
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=883fa5a00cd1929226900d5fc30aed4f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({ // eslint-disable-line
        movies: movies.results,
      });
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default MoviesList;

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 1rem;
`;
