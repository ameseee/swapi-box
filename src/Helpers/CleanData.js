export const cleanScroll = (scrollData) => {
  const scrollResults = scrollData.results;

  return scrollResults.map(film => {
    const title = film.title;
    const crawl = film.opening_crawl;
    const releaseDate = film.release_date;
    return [title, crawl, releaseDate];
  });
};

export const cleanPeople= (peopleData) => {
  const peopleResults = peopleData.results;

  return peopleResults.reduce((acc, person) => {
    acc[person.url] = {
      name: person.name,
      species: person.species
    };

    fetchHomeWorlds(person)
      .then(homeworld => {
        acc[person.url].homeworld = homeworld;
      });

    fetchSpecies(person)
      .then(species => {
        acc[person.url].species = species;
      });

    return acc;
  }, {});
};


export const fetchHomeWorlds = (person) => {
  return fetch(person.homeworld)
    .then(response => response.json())
    .then(planet => {
      return {
        name: planet.name,
        population: planet.population
      };
    })
    .catch(error => console.log(error));
};

export const fetchSpecies = (person) => {
  return fetch(person.species)
    .then(response => response.json())
    .then(species => species)
    .catch(error => console.log(error));
};

export const cleanPlanets = (planets) => {
  const planetResults = planets.results;
  //console.log(planetResults);
  planetResults.reduce((acc, planet) => {
    //console.log(planet);
    acc = {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population
    };

    // fetchResident(planet.residents)
    //   .then(response => response.json())
    //   .then(resident => {
    //     acc.residents = resident
    //   });

    return acc;
  }, {});

};

export const fetchResident = (residents) => {

  return residents.reduce((acc, resident) => {
    fetch(resident)
      .then(response => response.json())
      .then(resident => resident.name)
      .then(resName => {
        acc.resident = resName;
      })
      .catch(error => console.log(error));

    return acc;
  }, {});
};
