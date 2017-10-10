import React, { Component } from 'react';
import Scroll from '../Scroll/Scroll.js';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
       Amy and Francys SWAPI box
        <ButtonContainer />
        <CardContainer />
        <Scroll />
      </div>
    );
  }
}

export default App;
