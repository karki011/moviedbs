import React, { Component } from 'react';


class MovieGenre extends Component {
  state = {
    genres: {},
  }
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=883fa5a00cd1929226900d5fc30aed4f&language=en-US');
      const genres = await res.json();
      this.setState({ // eslint-disable-line
        genres,
      });
    } catch (e) {
      console.log(e); // eslint-disable-line
    }
  }

  render() {
    return (

      <h1>{this.state.genres.id}</h1>
    );
  }
}

export default MovieGenre;

// const MovieGrid = styled.div`
//   display: grid;
//   padding: 1rem;
//   grid-template-columns: repeat(6, 1fr);
//   grid-row-gap: 1rem;
// `;
