import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll } from '../../Helpers/CleanData';
import { cleanPeople } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {}
    };
    this.fetchHomeWorlds = this.fetchHomeWorlds.bind(this);
    this.fetchSpecies = this.fetchSpecies.bind(this);
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
      .then(peopleObj => peopleObj.results)
      .then(peopleData => peopleData.reduce((acc, person) => {
        acc[person.url] = {
          name: person.name,
          species: person.species
        };

        this.fetchHomeWorlds(person)
          .then(homeworld => {
            acc[person.url].homeworld = homeworld;
          });

        this.fetchSpecies(person)
          .then(species => {
            acc[person.url].species = species;
          });
        console.log(acc);
        return acc;
      }, {}));

  }

  fetchSpecies(person) {
    return fetch(person.species)
      .then(response => response.json())
      .then(species => species)
      .catch(error => console.log(error));
  }

  fetchHomeWorlds(person) {
    return fetch(person.homeworld)
      .then(response => response.json())
      .then(planet => {
        return {name: planet.name,
        population: planet.population}
      })
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
