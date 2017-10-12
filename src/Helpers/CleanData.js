export const cleanScroll = scrollData => {
  const scrollResults = scrollData.results;

  return scrollResults.map(film => {
    const title = film.title;
    const crawl = film.opening_crawl;
    const releaseDate = film.release_date;
    return [title, crawl, releaseDate];
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

  return peopleValues.reduce((acc, person) => {
    const findSpeciesMatch = speciesValues.filter(type => {
      if (type.url === person.species[0]) {
        acc[type.url] = type.name;
      }
      return findSpeciesMatch;
    });

    return acc;
  }, {});
};

const cleanPeople = (people, planets) => {
  const peopleValues = Object.values(people);
  const planetValues = Object.values(planets);

  return peopleValues.reduce((acc, person) => {
    const findUrlMatch = planetValues.find(planet => {
      if (planet.url === person.homeworld) {
        return planet.name;
      }
      return findUrlMatch;
    });

    acc[person.url] = {
      name: person.name,
      homeworld: findUrlMatch.name,
      population: findUrlMatch.population,
      species: 'species'
    };

    return acc;
  }, {});
};

const cleanVehicles = (vehicleResults) => {
  const vehicleValues = Object.values(vehicleResults);

  return vehicleValues.reduce((acc, vehicle) => {
    acc[vehicle.url] = {
      name: vehicle.name,
      model: vehicle.model,
      vehicleClass: vehicle.vehicle_class,
      passengers: vehicle.passengers
    };
    return acc;
  }, {});
};

const cleanPlanets = (planets, people) => {
  const planetValues = Object.values(planets);

  return planetValues.reduce((acc, planet) => {
    acc[planet.url] = {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population,
      residents: planet.residents.map(residentUrl => {
        return people[residentUrl];
      })
    };
    return acc;
  }, {});
};

export const indexRecords = records => {
  return records.reduce((acc, person) => {
    acc[person.url] = person;
    return acc;
  }, {});
};
