import { SHORT_DURATION } from './constants';

export default function searchFilter(array, query, short) {
  if (!array) {
    return [];
  }

  const filteredMovies = [...array];

  if (request) {
    filteredMovies = filteredMovies.filter((el) => el.nameRU
      .toLowerCase()
      .includes(request.toLowerCase()));
  }

  if (shortFilm) {
    return filteredMovies.filter((el) => el.duration <= SHORT_DURATION);
  }

  return filteredMovies;
}