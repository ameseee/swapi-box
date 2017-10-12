import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Video from '../Video/Video.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import {
  cleanScroll,
  indexRecords,
  cleanAllRecords
} from '../../Helpers/CleanData';

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
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(event) {
    this.setState({
      selected: event.target.value
    });
  }

  render() {
    const { cleanedVehicles, cleanedPlanets, cleanedPeople, selected } = this.state
    if (!Object.keys(this.state.people).length &&
        !Object.keys(this.state.planets).length &&
        !Object.keys(this.state.vehicles).length &&
        !this.state.scroll.length) {
      return (
        <main>LOADING...</main>
      );
    }  else {
      return (
        <main className="App">
          <h1 className="main-title">SWAPI<span className="main-title-two">BOX</span></h1>
          <ButtonContainer
            handleClick={this.handleClick}
            selected={this.state.selected} />
          <section>
            <article className='cards'>
              <CardContainer
                vehicles={cleanedVehicles}
                planets={cleanedPlanets}
                people={cleanedPeople}
                selected={selected}

              />
            </article>
            <article className='video-container'>
              <Video />
              {
                this.state.scroll.length && <Scroll scrollData={this.state.scroll} />
              }
            </article>
          </section>
        </main>
      );
    }
  }
}

export default App;
