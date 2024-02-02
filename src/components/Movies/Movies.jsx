import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies({ movies, savedMovies, onSaveMovie, onSearchMovies, isLoading }) {
    return (
        <main className="movies">
            <SearchForm onSearchMovies={onSearchMovies}></SearchForm>
            {isLoading ? <Preloader /> : <MoviesCardList movies={movies} savedMovies={savedMovies} onSaveMovie={onSaveMovie} />}
        </main>
    );
}

export default Movies;
