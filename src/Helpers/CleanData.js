export const cleanScroll = (scrollData) => {
  const scrollResults = scrollData.results;

  return scrollResults.map(film => {
    const title = film.title;
    const crawl = film.opening_crawl;
    const releaseDate = film.release_date;
    return [title, crawl, releaseDate];
  });
};

export const cleanVehicles = (vehicle) => {
  const vehicleResults = vehicle.results;

  return vehicleResults.map(vehicle => {
    const name = vehicle.name;
    const model = vehicle.model;
    const passengers = vehicle.passengers;
    const vehicleClass = vehicle.vehicle_class;
    return [name, model, passengers, vehicleClass];
  });
};

export const indexRecords = records => {
  return records.reduce((acc, person) => {
    acc[person.url] = person;
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
    .then(species => species.name)
    .catch(error => console.log(error));
};

export const cleanPlanets = planets => {
  return planets.reduce((acc, planet) => {
    acc[planet.url] = {
      name: planet.name,
      terrain: planet.terrain,
      climate: planet.climate,
      population: planet.population
    };
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
