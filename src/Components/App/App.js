import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchHomeWorlds, fetchSpecies, cleanPlanets, fetchResident } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {}
    };
  }

  fetchIntro() {
    return fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(scrollData =>  cleanScroll(scrollData))
      .catch(error => console.log(error));
  }

  fetchPeople() {
    return fetch('https://swapi.co/api/people/')
      .then(result => result.json())
      .then(peopleData => cleanPeople(peopleData))
      .catch(error => console.log(error));
  }

  fetchPlanets() {
    return fetch('https://swapi.co/api/planets/')
      .then(result => result.json())
      .then(planets => cleanPlanets(planets))
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchIntro()
      .then((intro) => {
        this.setState({
          scroll: intro
        });
      });

    this.fetchPeople()
      .then((people) => {
        this.setState({
          people
        });
      });

    this.fetchPlanets()
      .then((planets) => {
        this.setState({
          planets: planets
        });
      });
  }

  render() {
    return (
      <main className="App">
       Amy and Francys SWAPI box
        <ButtonContainer />
        <CardContainer
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} />
        {
          this.state.scroll.length && <Scroll scrollData={this.state.scroll} />
        }
      </main>
    );
  }
}

export default App;
