import React, { Component } from 'react';
import '../../index.css';
import CardContainer from '../CardContainer/CardContainer.js';
import ButtonContainer from '../ButtonContainer/ButtonContainer.js';
import Video from '../Video/Video.js';
import Scroll from '../Scroll/Scroll.js';
import './App.css';
import { cleanScroll, cleanPeople, fetchHomeWorlds, fetchSpecies, cleanPlanets, fetchResident } from '../../Helpers/CleanData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scroll: [],
      people: {},
      planets: {}
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

    return Promise.all([fetchIntro, fetchPeople, fetchPlanets])
      .catch(() => console.log('Promise.all error'))

  }


//   this.fetchPromise()
//     .then((promises) => {
//       this.setState({
//         movieCrawls: promises[0],
//         people: promises[1],
//         planets: promises[2],
//         vehicles: promises[3]
//       })
//     })
//   console.log('state set and app mounted!');
// }

  componentDidMount() {
    this.fetchSwapi()
      .then((resolvedPromise) => {
        this.setState({
          scroll: resolvedPromise[0],
          people: resolvedPromise[1],
          planets: resolvedPromise[2]
        });
      });
    console.log('state set and app mounted!');

  }

  render() {
    console.log(this.state.people);
    const peopleArray = [this.state.people]

    return (
      <main className="App">
       Amy and Francys SWAPI box
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
