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
  }


fetchData() {
    const scroll = fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(scrollData =>  cleanScroll(scrollData))
      .catch(err => console.log(err));

    return scroll;
    // return Promise.all([scroll])
    //   .catch(() => console.log('promise all error'));
  }

  componentDidMount() {
    this.fetchData()
      .then((promises) => {
        this.setState({
          scroll: promises
        });
      });


    // fetch('https://swapi.co/api/people/')
    //   .then(result => result.json())
    //   .then(peopleObj => peopleObj.results)
    //   .then(peopleData => peopleData.reduce((acc, person) => {
    //     if (!acc[person.name]) {
    //       acc[person.name] = {};
    //       acc[person.name].name = person.name;
    //     }
    //
    //     fetch(person.species)
    //       .then(results => results.json())
    //       .then(species => species.name)
    //       .then(speciesName => acc[person.name].species = speciesName);
    //
    //     fetch(person.homeworld)
    //       .then(results => results.json())
    //       .then(homeworld => {
    //         acc[person.name].homeworldName = homeworld.name;
    //         acc[person.name].homeworldPop = homeworld.population;
    //       });
    //     console.log(acc);
    //     return acc;
    //   }, {}));

    //   fetch('https://swapi.co/api/planets/')
    //   .then(result => result.json())
    //   .then(planetsObj => planetsObj.results)
    //   .then(planets => planets.reduce((acc, planet) => {
    //     //console.log(planet);
    //     if (!acc[planet.name]) {
    //       acc[planet.name] = {};
    //       acc[planet.name].name = planet.name;
    //       acc[planet.name].climate = planet.climate;
    //       acc[planet.name].terrain = planet.terrain;
    //       acc[planet.name].population = planet.population;
    //       acc[planet.name].residents = [];
    //     }
    //     //diff number of residents on diff planets - need to do something to go ov
    //     const residentsMap = planet.residents.map(resident => {
    //       fetch(resident)
    //         .then(result => result.json())
    //         .then(residentInfo => console.log(residentInfo))
    //     //console.log(acc)
    //       return acc;
    //     }, {});
    //   })
    // );
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
