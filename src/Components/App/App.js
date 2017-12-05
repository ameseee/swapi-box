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
import {capitalizeFirstLetter} from '../../Helpers/helper';

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
      cleanedSpecies: {},
      selected: '',
      favorited: false,
      favorites: []
    };
    this.fetchUntilAll = this.fetchUntilAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleFavorited = this.toggleFavorited.bind(this);
    this.saveFavorites = this.saveFavorites.bind(this);
  }

  fetchUntilAll(url, recordType, records = []) {
    if (url === null) {
      this.setState({
        [recordType]: indexRecords(records)
      }, () => {
        if (Object.keys(this.state[recordType]).length) {
          this.setState({
            [`cleaned${capitalizeFirstLetter(recordType)}`]: cleanAllRecords(this.state)[recordType]
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

  toggleFavorited(event) {
    event.target.classList.toggle('favorited');
    this.setState({
      favorited: !this.state.favorited
    });
    this.saveFavorites(event);
  }

  saveFavorites(event) {
    if (event.target.classList.value === 'favorited') {
      const currentTargetChild = [...event.currentTarget.children];
      const updateFaves = currentTargetChild.map(element => {
        return element.innerText;
      });

      this.setState({
        favorites: [...this.state.favorites, updateFaves]
      });
    } else {
      const currentTargetChild = [...event.currentTarget.children];
      const unclickToUnFave = this.state.favorites.filter(card => {

        if (card[0] !== currentTargetChild[0].innerText) {
          return card;
        }
      });

      this.setState({
        favorites: unclickToUnFave
      });
    }

  }

  handleClick(event) {
    this.toggleActive(event.currentTarget);
    this.setState({
      selected: event.target.value
    });
  }

  toggleActive(itemBtn) {
    const buttons = document.querySelectorAll('.item-button');
    buttons.forEach(button => button.classList.remove('active'));
    itemBtn.classList.toggle('active');
  }

  render() {
    const { cleanedVehicles, cleanedPlanets, cleanedPeople, selected, scroll, favorites } = this.state;
    if (!Object.keys(cleanedPeople).length) {
      return (
        <main>LOADING...</main>
      );
    }
    return (
      <main className="App">
        <h1 className="main-title">SWAPI<span className="main-title-two">BOX</span></h1>
        <ButtonContainer
          handleClick={this.handleClick}
          selected={selected} />
        <section>
          <article className='cards'>
            <CardContainer
              vehicles={cleanedVehicles}
              planets={cleanedPlanets}
              people={cleanedPeople}
              favorites={favorites}
              selected={selected}
              toggleFavorited={this.toggleFavorited}
            />
          </article>
          <article className='video-container'>
            <Video />
            {
              scroll.length && <Scroll scrollData={scroll} />
            }
          </article>
        </section>
      </main>
    );
  }
}

export default App;
