import SearchForm from "./SearchForm/SearchForm";
import Preloader from "./Preloader/Preloader";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import "./Movies.css";

function Movies() {
    return (
        <main className="movies">
            <SearchForm></SearchForm>
            <Preloader></Preloader>
            <MoviesCardList></MoviesCardList>
        </main>
    );
}

export default Movies;
