export const cleanScroll = scrollData => {
  const scrollResults = scrollData.results;

  return scrollResults.map(film => {
    const title = film.title;
    const crawl = film.opening_crawl;
    const releaseDate = film.release_date;
    return [title, crawl, releaseDate];
  });
};


export const cleanAllRecords = ({people, planets, vehicles}) => {
  const cleanedVehicleResults = cleanVehicles(vehicles);
  const cleanedPeopleResults = cleanPeople(people, planets);
  const cleanedPlanetsResults = cleanPlanets(planets, people);

  return [cleanedVehicleResults, cleanedPlanetsResults];
};

export const cleanPlanets = (planets, people) => {
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
    // console.log('residents', acc[planet.url].residents);
    return acc;
  }, {});
};

export const cleanPeople = (people, planets) => {
  const peopleValues = Object.values(people);

  return peopleValues.reduce((acc, person) => {
//     if () {
//       if planet url matches persome homeworld url, then s
//     }
//     acc[person.url] = {
//       name: person.name,
//       homeworld: person.homeworld
// //person.homeworld === planets.name
//     }
return acc;
  })
}

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



const cleanVehicles = (vehicleResults) => {
  const vehicleValues = Object.values(vehicleResults);
//REFACTOR: could combine logic of this reduce and put it
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
