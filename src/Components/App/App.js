import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Video from '../Video/Video.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchHomeWorlds, fetchSpecies, cleanPlanets, fetchResident, indexRecords, cleanAllRecords } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {},
      planets: {},
      vehicles: {},
      cleanedPlanets: {},
      cleanedVehicles: {}
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
            cleanedVehicles: cleanAllRecords(this.state).vehicles
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
      .catch(error => console.log(error));

    const fetchPeople = this.fetchUntilAll('https://swapi.co/api/people/', 'people')

    const fetchPlanets =  this.fetchUntilAll('https://swapi.co/api/planets/', 'planets')

    const fetchVehicles =  this.fetchUntilAll('https://swapi.co/api/vehicles/', 'vehicles')

    return await Promise.all([fetchIntro, fetchPeople, fetchPlanets, fetchVehicles])
      .catch(() => console.log('Promise.all error'))
  }

  componentDidMount() {
    this.fetchSwapi()
      .then((resolvedPromise) => {
        console.log(resolvedPromise);
        this.setState({
          scroll: resolvedPromise[0]
        }, () => {
          //maybe setState with this
          console.log(this.state.vehicles);
        });
      });
  }

  handleClick() {
    console.log('click has been handled');
  };

  render() {
    return (
      <main className="App">
       <h1 className="main-title">SWAPI<span className="main-title-two">BOX</span></h1>
       <ButtonContainer handleClick={this.handleClick}/>
        {/* <Video /> */}

        {/* {
          this.state.scroll.length && <Scroll scrollData={this.state.scroll} />
        } */}
        <CardContainer
          vehicles={this.state.cleanedVehicles}
          planets={this.state.cleanedPlanets} />
      </main>
    );
  }
}

export default App;
