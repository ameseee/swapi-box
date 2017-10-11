import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchHomeWorlds, fetchSpecies, cleanPlanets, cleanVehicles, fetchResident } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {},
      planets: {},
      vehicles: []
      // planets:
    };
  }

  fetchSwapi() {
    const fetchIntro = fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(scrollData =>  cleanScroll(scrollData))
      .catch(error => console.log(error));


    const fetchPeople = fetch('https://swapi.co/api/people/')
      .then(result => result.json())
      .then(peopleData => cleanPeople(peopleData))
      .catch(error => console.log(error));

    const fetchPlanets = fetch('https://swapi.co/api/planets/')
      .then(result => result.json())
      .then(planets => cleanPlanets(planets))
      .catch(error => console.log(error));

    const fetchVehicles = fetch('https://swapi.co/api/vehicles/')
      .then(result => result.json())
      .then(vehicles => cleanVehicles(vehicles))
      .catch(error => console.log(error));

    return Promise.all([fetchIntro, fetchPeople, fetchPlanets, fetchVehicles])
      .catch(() => console.log('Promise.all error'))

  }

  componentDidMount() {
    this.fetchSwapi()
      .then((resolvedPromise) => {
        this.setState({
          scroll: resolvedPromise[0],
          people: resolvedPromise[1],
          planets: resolvedPromise[2],
          vehicles: resolvedPromise[3]
        });
      });
  }

  render() {
    const peopleArray = [this.state.people]

    return (
      <main className="App">
       Amy and Francys SWAPI box
        <ButtonContainer />
        this.state.people && <CardContainer
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
