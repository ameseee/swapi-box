import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: []
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(dataObj => dataObj.results)
      .then(resultsArray => {
        const scrollData = resultsArray.map(film => {
          const title = film.title;
          const crawl = film.opening_crawl;
          const releaseDate = film.release_date;
          return [title, crawl, releaseDate];
        });
        this.setState({ scroll: scrollData });
      })
      .catch(err => console.log(err));

  }


  render() {
    return (
      <div className="App">
       Amy and Francys SWAPI box
        <ButtonContainer />
        <CardContainer />
        <Scroll scrollData={this.state.scroll}/>
      </div>
    );
  }
}

export default App;
