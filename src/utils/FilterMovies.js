import { SHORT_DURATION } from "./constants";

function searchFilter(array, request, shortFilms) {
    if (!array) {
        return [];
    }
    var filterMovies = [...array];

    if (request) {
        filterMovies = filterMovies.filter((el) => el.nameRU.toLowerCase().includes(request.toLowerCase()));
    }
    if (shortFilms) {
        return filterMovies.filter((el) => el.duration <= SHORT_DURATION);
    }
    return filterMovies;
}

export default searchFilter;
