export const cleanScroll = scrollData => {
  const scrollResults = scrollData.results;
  return scrollResults.map(film => {
    return [film.title, film.opening_crawl, film.release_date];
  });
};

export const cleanAllRecords = ({people, planets, vehicles, species}) => {
  return {
    vehicles: cleanVehicles(vehicles),
    people: cleanPeople(people, planets, species),
    planets: cleanPlanets(planets, people),
    species: cleanSpecies(species, people)
  };
};

export const cleanSpecies = (species, people) => {
  const speciesValues = Object.values(species);
  const peopleValues = Object.values(people);

  return peopleValues.reduce((scrubbedSpecies, person) => {
    const findSpeciesMatch = speciesValues.filter(type => {
      if (type.url === person.species[0]) {
        scrubbedSpecies[type.url] = type.name;
      }
      return findSpeciesMatch;
    });

    return scrubbedSpecies;
  }, {});
};

const cleanPeople = (people, planets) => {
  const peopleValues = Object.values(people);

  return peopleValues.reduce((scrubbedPeople, person) => {
    const { homeworld, url, name } = person;

    scrubbedPeople[url] = {
      url,
      name,
      homeworld: planets[homeworld].name,
      population: planets[homeworld].population,
      species: 'species'
    };

    return scrubbedPeople;
  }, {});
};

const cleanVehicles = (vehicleResults) => {
  const vehicleValues = Object.values(vehicleResults);

  return vehicleValues.reduce((scrubbedVehicles, vehicle) => {
    const { name, model, passengers, vehicle_class, url } = vehicle;
    scrubbedVehicles[url] = {
      vehicleClass: vehicle_class,
      url,
      name,
      model,
      passengers
    };
    return scrubbedVehicles;
  }, {});
};

const cleanPlanets = (planets, people) => {
  const planetValues = Object.values(planets);

  return planetValues.reduce((scrubbedPlanets, planet) => {
    const { name, terrain, climate, population, residents, url } = planet;
    scrubbedPlanets[url] = {
      url,
      name,
      terrain,
      climate,
      population,
      residents: residents.map(residentUrl => {
        return people[residentUrl] && people[residentUrl].name;
      })
    };
    return scrubbedPlanets;
  }, {});
};

export const indexRecords = records => {
  return records.reduce((acc, person) => {
    acc[person.url] = person;
    return acc;
  }, {});
};
