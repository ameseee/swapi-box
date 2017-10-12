import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Video from '../Video/Video.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchHomeWorlds, fetchSpecies, cleanPlanets, cleanVehicles, fetchResident, indexRecords } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {},
      planets: {},
      vehicles: {},
      cleanedPeople: {},
      cleanedPlanets: {},
      cleanedVehicles: {}
    };
    this.fetchUntilAll = this.fetchUntilAll.bind(this);
  }

  fetchUntilAll(url, recordType, records = []) {
    if (url === null) {
      this.setState({
        [recordType]: indexRecords(records)
      });
    }

    fetch(url)
      .then(response => response.json())
      .then(dataResponse => {
        const newRecords = records.concat(dataResponse.results);
        return this.fetchUntilAll(dataResponse.next, recordType, newRecords);
      });
};
  async fetchSwapi() {
    const fetchIntro = fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(scroll =>  cleanScroll(scroll))
      .catch(error => console.log(error));

    const fetchPeople = await this.fetchUntilAll('https://swapi.co/api/people/', 'people')

    const fetchPlanets = fetch('https://swapi.co/api/planets/')
      .then(result => result.json())
      .then(planets => indexRecords(planets.results))
      .catch(error => console.log(error));

    const fetchVehicles = fetch('https://swapi.co/api/vehicles/')
      .then(result => result.json())
      .then(vehicles => indexRecords(vehicles.results))
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
        }, () => {
          const cleanedPlanets = cleanPlanets(Object.values(this.state.planets));
          //maybe setState with this
        });
      });
  }

  render() {
    const peopleArray = [this.state.people]

    return (
      <main className="App">
       Amy and Francys SWAPI box
        <ButtonContainer />
        {/* this.state.people && <CardContainer
       <ButtonContainer />
        <Video />
        {/* <CardContainer
          people={this.state.people}
          planets={this.state.planets}
          vehicles={this.state.vehicles} /> */}
        {
          this.state.scroll.length && <Scroll scrollData={this.state.scroll} />
        }
      </main>
    );
  }
}

export default App;
