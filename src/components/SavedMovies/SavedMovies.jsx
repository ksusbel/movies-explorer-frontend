import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";

import "../Movies/Movies.css";

function SavedMovies({ onDelMovie, savedMovies, onSearchMovie, isLoading, searchError }) {
    return (
        <main className="movies">
            <SearchForm onSearchMovies={onSearchMovie}></SearchForm>
            {isLoading ? <Preloader></Preloader> : <MoviesCardList savedMovies={savedMovies} onDelMovie={onDelMovie} searchError={searchError}></MoviesCardList>}
        </main>
    );
}

export default SavedMovies;
