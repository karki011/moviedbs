import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: 'Start Wars'
  },
  {
    id: 2,
    title: 'Spider man'
  },
  {
    id: 3,
    title: '36th Camber of shaloin'
  }
];

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>  

        {/* iteration  */}
        {movies.map((movie) =>  <Movie key={movie.id} movie ={movie}/>)}   
      {/* iteration  */}
      </div>
    );
  }
}


export default App;
