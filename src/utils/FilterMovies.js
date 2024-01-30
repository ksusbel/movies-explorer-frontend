import { SHORT_DURATION } from './constants';

function searchFilter(array, request, shortFilms) {
  if (!array) {
    return [];
  }
  var filteredMovies = [...array];
 
  if (request) {
    filteredMovies = filteredMovies.filter((el) => el.nameRU
      .toLowerCase()
      .includes(request.toLowerCase()));
  }
  if (shortFilms) {
    return filteredMovies.filter((el) => el.duration <= SHORT_DURATION);
  }
  return filteredMovies;
}

export default searchFilter;