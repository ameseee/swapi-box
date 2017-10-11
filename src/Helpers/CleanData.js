export const cleanScroll = (scrollData) => {
  const scrollResults = scrollData.results;

  return scrollResults.map(film => {
    const title = film.title;
    const crawl = film.opening_crawl;
    const releaseDate = film.release_date;
    return [title, crawl, releaseDate];
  });

};

// export const cleanPeople = (peopleData) => {
//   const peopleResults = peopleData.results;
//
//   peopleResults.map(person => {
//     console.log(person);
//   });
