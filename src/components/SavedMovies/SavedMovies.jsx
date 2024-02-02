import "../Movies/Movies.css";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import SearchForm from "../Movies/SearchForm/SearchForm";
import Preloader from "../Movies/Preloader/Preloader";

function SavedMovies({ savedMovies, onDelMovie, onSearchMovies, isLoading }) {
    return (
        <main className="movies">
            <SearchForm onSearchMovies={onSearchMovies}></SearchForm>
            {isLoading ? <Preloader></Preloader> : <MoviesCardList savedMovies={savedMovies} onDelMovie={onDelMovie}></MoviesCardList>}
        </main>
    );
}

export default SavedMovies;
