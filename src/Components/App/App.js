import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Video from '../Video/Video.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchSpecies, cleanPlanets, indexRecords, cleanAllRecords } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {},
      planets: {},
      species: {},
      vehicles: {},
      cleanedPlanets: {},
      cleanedVehicles: {},
      cleanedPeople: {},
      selected: ''
    };
    this.fetchUntilAll = this.fetchUntilAll.bind(this);
    this.handleClickPeople = this.handleClickPeople.bind(this);
  }

  fetchUntilAll(url, recordType, records = []) {
    if (url === null) {
      this.setState({
        [recordType]: indexRecords(records)
      }, () => {
        if (Object.keys(this.state.people).length &&
            Object.keys(this.state.planets).length &&
            Object.keys(this.state.vehicles).length) {
          this.setState({
            cleanedPlanets: cleanAllRecords(this.state).planets,
            cleanedVehicles: cleanAllRecords(this.state).vehicles,
            cleanedPeople: cleanAllRecords(this.state).people,
            cleanedSpecies: cleanAllRecords(this.state).species
          });
        }
      });
      return;
    }

    fetch(url)
      .then(response => response.json())
      .then(dataResponse => {
        const newRecords = records.concat(dataResponse.results);
        return this.fetchUntilAll(dataResponse.next, recordType, newRecords);
      });
  }

  async fetchSwapi() {
    const fetchIntro = fetch('https://swapi.co/api/films/')
      .then(result => result.json())
      .then(scroll =>  cleanScroll(scroll))
      .catch(error => alert(error));

    const fetchPeople = this.fetchUntilAll('https://swapi.co/api/people/', 'people');
    const fetchPlanets =  this.fetchUntilAll('https://swapi.co/api/planets/', 'planets');
    const fetchSpecies = this.fetchUntilAll('https://swapi.co/api/species/', 'species');
    const fetchVehicles =  this.fetchUntilAll('https://swapi.co/api/vehicles/', 'vehicles');

    return await Promise.all(
      [fetchIntro,
        fetchPeople,
        fetchPlanets,
        fetchSpecies,
        fetchVehicles])
      .catch(() => alert('Promise.all error'));
  }

  componentDidMount() {
    this.fetchSwapi()
      .then((resolvedPromise) => {
        this.setState({
          scroll: resolvedPromise[0]
        });
      });
  }

  handleClickPeople(event) {
    console.log('clicked handle people');
    this.setState({
      selected: event.target.value
    });
  }

  render() {
    return (
      <main className="App">
       <h1 className="main-title">SWAPI<span className="main-title-two">BOX</span></h1>
       <ButtonContainer
         handleClickPeople={this.handleClickPeople}
         selected={this.state.selected} />
        {/* <Video /> */}

        {/* {
          this.state.scroll.length && <Scroll scrollData={this.state.scroll} />
        } */}




        <CardContainer
          vehicles={this.state.cleanedVehicles}
          planets={this.state.cleanedPlanets}
          people={this.state.cleanedPeople}/>
      </main>
    );
  }
}

export default App;

// if (this.state.selected === 'vehicles') {
//   <CardContainer
//     vehicles={this.state.cleanedVehicles} />
// } else if (this.state.selected === 'people') {
//   <CardContainer
//     people={this.state.cleanedPeople} />
// } else if (this.state.selected === 'planets') {
//   <CardContainer
//     planets={this.state.cleanedPlanets} />
// }
