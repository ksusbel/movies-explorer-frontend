import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import "../Movies/Movies.css";

function SavedMovies() {
    return (
        <main className="movies">
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList></MoviesCardList>
        </main>
    );
}

export default SavedMovies;
