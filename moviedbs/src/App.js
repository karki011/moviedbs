import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  // lifecycle method steps

  constructor(props){
    super(props);
    console.log("constructor");
  }

  componentWillMount(){ //dont use it at often it wont trigger rerender
    console.log("willmount");
  }

  componentDidMount(){//state will change and call rerender
    console.log('mounted');
  }
  //
  state = {
    toggle: true
  }

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
         <Welcome />
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.toggle && 
          <p> This should show and hide.</p>
        }
        <button onClick={this.toggle}> Show / Hide </button>
      </div>
    );
  }
}


class Welcome extends Component {
  render(){
    return (
      <h1 className="App-title">Welcome to React</h1>

    )
  }
}

export default App;
